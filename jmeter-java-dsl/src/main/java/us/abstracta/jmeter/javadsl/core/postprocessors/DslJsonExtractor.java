package us.abstracta.jmeter.javadsl.core.postprocessors;

import java.lang.reflect.Method;
import java.util.List;
import org.apache.jmeter.extractor.json.jmespath.JMESPathExtractor;
import org.apache.jmeter.extractor.json.jmespath.gui.JMESPathExtractorGui;
import org.apache.jmeter.testelement.TestElement;
import us.abstracta.jmeter.javadsl.codegeneration.MethodCall;
import us.abstracta.jmeter.javadsl.codegeneration.TestElementParamBuilder;

/**
 * Allows extracting part of a JSON response using JMESPath to store into a variable.
 * <p>
 * By default, the JMESPath is configured to extract from the main sample (does not include sub
 * samples) response body the first match of the JMESPath. If no match is found, then variable will
 * be assigned empty string.
 *
 * @since 0.28
 */
public class DslJsonExtractor extends DslVariableExtractor<DslJsonExtractor> {

  protected String jmesPath;

  public DslJsonExtractor(String varName, String jmesPath) {
    super("JSON JMESPath Extractor", JMESPathExtractorGui.class, varName);
    this.jmesPath = jmesPath;
  }

  /**
   * Sets the match number to be extracted.
   * <p>
   * For example, if a response looks like this: <code>[{"name":"test"},{"name":"tester"}]</code>
   * and you use {@code [].name} as JMESPath, first match (1) would extract {@code test} and second
   * match (2) would extract {@code tester}.
   * <p>
   * When not specified, the first match will be used. When 0 is specified, a random match will be
   * used. When negative, all the matches are extracted to variables with name {@code
   * <variableName>_<matchNumber>}, the number of matches is stored in {@code
   * <variableName>_matchNr}, and default value is assigned to {@code <variableName>}.
   *
   * @param matchNumber specifies the match number to use.
   * @return the extractor for further configuration and usage.
   */
  public DslJsonExtractor matchNumber(int matchNumber) {
    this.matchNumber = matchNumber;
    return this;
  }

  /**
   * Sets the default value to be stored in the JMeter variable when no match is found.
   * <p>
   * When match number is negative then the value is always assigned to the variable name.
   * <p>
   * A common pattern is to specify this value to a known value (e.g.:
   * &lt;VAR&gt;_EXTRACTION_FAILURE) and then add some assertion on the variable to mark request as
   * failure when the match doesn't work.
   * <p>
   * When not specified, then the variable will be assigned to empty string.
   *
   * @param defaultValue specifies the default value to be used.
   * @return the extractor for further configuration and usage.
   */
  public DslJsonExtractor defaultValue(String defaultValue) {
    this.defaultValue = defaultValue;
    return this;
  }

  @Override
  protected TestElement buildTestElement() {
    JMESPathExtractor ret = new JMESPathExtractor();
    setScopeTo(ret);
    ret.setRefName(varName);
    ret.setJmesPathExpression(jmesPath);
    ret.setMatchNumber(String.valueOf(matchNumber));
    ret.setDefaultValue(defaultValue);
    return ret;
  }

  public static class CodeBuilder extends ScopedTestElementCallBuilder<JMESPathExtractor> {

    public CodeBuilder(List<Method> builderMethods) {
      super(JMESPathExtractor.class, builderMethods);
    }

    @Override
    protected MethodCall buildScopedMethodCall(JMESPathExtractor testElement) {
      TestElementParamBuilder paramBuilder = buildParamBuilder(testElement);
      return buildMethodCall(paramBuilder.stringParam("referenceName"),
          paramBuilder.stringParam("jmesPathExpr"));
    }

    private TestElementParamBuilder buildParamBuilder(JMESPathExtractor testElement) {
      return new TestElementParamBuilder(testElement, "JMESExtractor");
    }

    @Override
    protected void chainScopedElementAdditionalOptions(MethodCall ret,
        JMESPathExtractor testElement) {
      TestElementParamBuilder paramBuilder = buildParamBuilder(testElement);
      ret.chain("matchNumber", paramBuilder.intParam("matchNumber", 1));
      ret.chain("defaultValue", paramBuilder.stringParam("defaultValue"));
    }

  }

}
