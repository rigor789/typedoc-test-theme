import { Options, DefaultTheme, DefaultThemeRenderContext } from "typedoc";

class TestThemeContext extends DefaultThemeRenderContext {
  _header: any;

  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options);
    this._header = this.header;

    this.header = (props) => {
      const res = this._header(props);

      res.children.push({
        tag: "div",
        props: { class: "patched-header-test" },
        children: [],
      });

      console.log(res.children);
      return res;
    };
  }
}

export class TestTheme extends DefaultTheme {
  private _contextCache?: TestThemeContext;
  override getRenderContext() {
    this._contextCache ||= new TestThemeContext(this, this.application.options);
    return this._contextCache;
  }
}
