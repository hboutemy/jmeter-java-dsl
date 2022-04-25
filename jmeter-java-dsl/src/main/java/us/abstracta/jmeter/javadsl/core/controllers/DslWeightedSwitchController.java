package us.abstracta.jmeter.javadsl.core.controllers;

import com.blazemeter.jmeter.control.WeightedSwitchController;
import com.blazemeter.jmeter.control.WeightedSwitchControllerGui;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.jmeter.gui.util.PowerTableModel;
import org.apache.jmeter.testelement.TestElement;
import org.apache.jorphan.collections.HashTree;
import us.abstracta.jmeter.javadsl.core.BuildTreeContext;
import us.abstracta.jmeter.javadsl.core.testelements.BaseTestElement;
import us.abstracta.jmeter.javadsl.core.threadgroups.BaseThreadGroup.ThreadGroupChild;

/**
 * DSL wrapper for {@link WeightedSwitchController}
 * More information about it here:
 * <a href=https://github.com/Blazemeter/jmeter-bzm-plugins/blob/master/wsc/WeightedSwitchController.md>WeightedSwitchController docs</a>
 *
 * During each iteration controller checks the relation of every child's executions
 * to total number of children executions, than compare these fractions to weights set in the model
 * and chooses one with maximum difference
 *
 * For an example we have a model with these weights [10,20,30,40]
 * - total is 100, fractions are [1/10, 1/5, 3/10, 2/5],
 * on current iteration we have that numbers of executions [1,1,1,1]
 * - total is 4, fractions are [1/4, 1/4, 1/4, 1/4]
 * diffs are [-0.15, -0.05, 0.05, 0.15], so the controller will choose the 4th child.
 *
 * @since 0.53
 */
public class DslWeightedSwitchController extends BaseController {

  private final PowerTableModel model;
  private final WeightedSwitchController wsc;

  public DslWeightedSwitchController() {
    super("Weighted Switch Controller",
        WeightedSwitchControllerGui.class,
        new ArrayList<>()
    );

    model = new PowerTableModel(
        new String[]{"Name", "Weight", "Enabled"},
        new Class[]{String.class, String.class, String.class}
    );

    wsc = new WeightedSwitchController();
  }

  /**
   * Internal method to add TestElement to {@link WeightedSwitchController} model.
   *
   * Checks that total sum of weights will not exceed 100 considering the new element
   *
   * @param weight  weight of new TestElement in the model
   * @param element the new TestElement
   * @param enabled flag to set TestElement enabled or not
   *
   * @throws IllegalArgumentException throws exception if total sum of weights exceed 100
   */
  private void addToModel(Long weight, BaseTestElement element, Boolean enabled)
      throws IllegalArgumentException {

    List<Long> weights = this.model.getData().getColumnAsObjectArray("Weight")
        .stream()
        .map(x -> Long.parseLong(x.toString()))
        .collect(Collectors.toList());

    if (weights.stream().reduce(0L, Long::sum) + weight <= 100) {
      HashTree ret = new HashTree();
      BuildTreeContext ctx = new BuildTreeContext();

      ctx.buildTreeFor(element, ret);

      TestElement te = (TestElement) ret.getArray()[0];

      this.model.addRow(new String[]{te.getName(), weight.toString(), enabled.toString()});
      this.children.add((ThreadGroupChild) element);
    } else {
      throw new IllegalArgumentException("Total sum of weights should be less or equal 100");
    }

  }

  /**
   * Method adds test element to model with enabling it by default.
   *
   * Uses internal method {@link #addToModel(Long, BaseTestElement, Boolean)}
   * to add test element to {@link WeightedSwitchController} internal model
   *
   * @param weight  relative fraction of total requests number for TestElement
   * @param element any test element that will be executed
   * @return the controller instance for further configuration and usage
   */
  public DslWeightedSwitchController add(Long weight, BaseTestElement element) {
    this.addToModel(weight, element, true);
    return this;
  }

  /**
   * Same as {@link #add(Long, BaseTestElement)} but allows to set the enabled flag.
   *
   * @param weight  relative fraction of total requests number for TestElement
   * @param element any test element that will be executed
   * @param enabled flag to set element enable ot not
   * @return the controller instance for further configuration and usage
   */
  public DslWeightedSwitchController add(Long weight, BaseTestElement element, Boolean enabled) {
    this.addToModel(weight, element, enabled);
    return this;
  }

  @Override
  public TestElement buildTestElement() {
    wsc.setData(model);
    HashTree ret = new HashTree();
    BuildTreeContext ctx = new BuildTreeContext();
    children.forEach(c -> ctx.buildChild(c, ret));
    for (Object te : ret.list()) {
      wsc.addTestElement((TestElement) te);
    }
    return wsc;
  }

}