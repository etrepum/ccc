// Generated by CoffeeScript 1.3.3
(function() {
  var pseudoSelectors, rules;

  pseudoSelectors = "hover active focus link visited before after first-child last-child first-letter lang".split(" ");

  rules = {
    "background": [],
    "background-color": [],
    "background-position": [],
    "background-repeat": ["no-repeat", "repeat-x", "repeat-y"],
    "background-image": [],
    "border": ["1px solid "],
    "border-style": ["solid", "dotted", "double", "dashed"],
    "border-top": ["1px solid "],
    "border-right": ["1px solid "],
    "border-left": ["1px solid "],
    "border-bottom": ["1px solid "],
    "border-top-color": [],
    "border-right-color": [],
    "border-left-color": [],
    "border-bottom-color": [],
    "border-top-style": ["solid", "dotted", "double", "dashed"],
    "border-right-style": ["solid", "dotted", "double", "dashed"],
    "border-left-style": ["solid", "dotted", "double", "dashed"],
    "border-bottom-style": [],
    "border-top-width": [],
    "border-right-width": [],
    "border-left-width": [],
    "border-bottom-width": [],
    "border-radius": [],
    "border-top-left-radius": [],
    "border-top-right-radius": [],
    "border-bottom-left-radius": [],
    "border-border-right-radius": [],
    "border-image": [],
    "box-shadow": ["1px 1px 5px #000"],
    "outline": [],
    "overflow": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"],
    "overflow-x": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"],
    "overflow-y": ["visible", "hidden", "scroll", "auto", "no-display", "no-content"],
    "rotation": ["45deg", "90deg", "180deg"],
    "opacity": [],
    "height": [],
    "width": [],
    "min-height": [],
    "min-width": [],
    "max-height": [],
    "max-width": [],
    "font": [],
    "font-family": [
      {
        label: "Arial",
        value: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
      }, {
        label: "Arial Black",
        value: '"Arial Black", "Arial Bold", Gadget, sans-serif'
      }, {
        label: "Arial Narrow",
        value: '"Arial Narrow", Arial, sans-serif'
      }, {
        label: "Arial Rounded MT Bold",
        value: '"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif'
      }, {
        label: "Avant Garde",
        value: '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif'
      }, {
        label: "Calibri",
        value: 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif'
      }, {
        label: "Candara",
        value: 'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif'
      }, {
        label: "Century Gothic",
        value: '"Century Gothic", CenturyGothic, "AppleGothic", sans-serif'
      }, {
        label: "Franklin Gothic Museum",
        value: '"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif'
      }, {
        label: "Futura",
        value: 'Futura, "Trebuchet MS", Arial, sans-serif'
      }, {
        label: "Geneva",
        value: 'Geneva, Tahoma, Verdana, sans-serif'
      }, {
        label: "Gill Sans",
        value: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif'
      }, {
        label: "Helvetica",
        value: '"Helvetica Neue", Helvetica, Arial, sans-serif'
      }, {
        label: "Impact",
        value: 'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans serif'
      }, {
        label: "Lucida Grande",
        value: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif'
      }, {
        label: "Optima",
        value: 'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif'
      }, {
        label: "Segoe UI",
        value: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif'
      }, {
        label: "Tahoma",
        value: 'Tahoma, Verdana, Segoe, sans-serif'
      }, {
        label: "Trebuchet MS",
        value: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
      }, {
        label: "Verdana",
        value: 'Verdana, Geneva, sans-serif'
      }, {
        label: "Baskerville",
        value: 'Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif'
      }, {
        label: "Big Caslon",
        value: '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif'
      }, {
        label: "Bodoni MT",
        value: '"Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif'
      }, {
        label: "Book Antigua",
        value: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif'
      }, {
        label: "Calisto MT",
        value: '"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif'
      }, {
        label: "Cambria",
        value: 'Cambria, Georgia, serif'
      }, {
        label: "Didot",
        value: 'Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif'
      }, {
        label: "Garamond",
        value: 'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif'
      }, {
        label: "Georgia",
        value: 'Georgia, Times, "Times New Roman", serif'
      }, {
        label: "Goudy Old Style",
        value: '"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif'
      }, {
        label: "Hoefler Text",
        value: '"Hoefler Text", "Baskerville old face", Garamond, "Times New Roman", serif'
      }, {
        label: "Lucida Bright",
        value: '"Lucida Bright", Georgia, serif'
      }, {
        label: "Palatino",
        value: 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif'
      }, {
        label: "Perpetua",
        value: 'Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif'
      }, {
        label: "Rockwell",
        value: 'Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif'
      }, {
        label: "Rockwell Extra Bold",
        value: '"Rockwell Extra Bold", "Rockwell Bold", monospace'
      }, {
        label: "Times New Roman",
        value: 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif'
      }, {
        label: "Andale Mono",
        value: '"Andale Mono", AndaleMono, monospace'
      }, {
        label: "Consolas",
        value: 'Consolas, monaco, monospace'
      }, {
        label: "Courier New",
        value: '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'
      }, {
        label: "Lucida Console",
        value: '"Lucida Console", "Lucida Sans Typewriter", Monaco, "Bitstream Vera Sans Mono", monospace'
      }, {
        label: "Monaco",
        value: 'Monaco, Consolas, "Lucida Console", monospace'
      }, {
        label: "Copperplate",
        value: 'Copperplate, "Copperplate Gothic Light", fantasy'
      }, {
        label: "Papyrus",
        value: 'Papyrus, fantasy'
      }, {
        label: "Brush Script MT",
        value: '"Brush Script MT", cursive'
      }
    ],
    "font-size": [],
    "font-style": ["italic", "oblique", "normal"],
    "font-variant": ["small-caps", "normal"],
    "font-weight": ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    "content": [],
    "list-style": ["none"],
    "list-style-image": [],
    "list-style-position": ["inside", "outside"],
    "list-style-type": ["disc", "circle", "square", "decimal", "lower-alpha", "upper-alpha", "lower-roman", "upper-roman"],
    "margin": [],
    "margin-top": [],
    "margin-right": [],
    "margin-left": [],
    "margin-bottom": [],
    "padding": [],
    "padding-top": [],
    "padding-right": [],
    "padding-left": [],
    "padding-bottom": [],
    "top": [],
    "bottom": [],
    "left": [],
    "right": [],
    "clear": ["left", "right", "both"],
    "cursor": ["auto", "pointer", "move", "crosshair", "help", "default", "progress", "wait", "no-drop", "not-allowed"],
    "display": ["block", "inline", "inline-block", "none", "table", "table-cell", "table-row"],
    "float": ["left", "right", "none"],
    "position": ["absolute", "relative", "fixed", "static"],
    "visibility": ["hidden", "visible"],
    "z-index": [],
    "border-collapse": ["collapse", "separate"],
    "table-layout": ["fixed", "auto"],
    "color": [],
    "direction": ["rtl", "ltr"],
    "letter-spacing": [],
    "line-height": [],
    "text-align": ["left", "right", "center", "justify"],
    "text-decoration": ["underline", "overline", "line-through"],
    "text-index": [],
    "text-transform": ["capitalize", "uppercase", "lowercase"],
    "vertical-align": ["baseline", "top", "middle", "bottom"],
    "white-space": ["nowrap", "pre", "pre-line", "pre-wrap", "normal"],
    "word-spacing": [],
    "text-overflow": ["ellipsis", "clip"],
    "text-shadow": ["2px 2px #ff0"],
    "transform": [],
    "transform-origin": [],
    "transform-style": [],
    "perspective": [],
    "backface-visibility": [],
    "transition": ["all 0.2s ease"],
    "transition-property": [],
    "transition-duration": [],
    "transition-timing-function": [],
    "transition-delay": [],
    "appearance": [],
    "box-sizing": ["border-box", "content-box"]
  };

  window.CssCompletion = (function() {

    function CssCompletion(options) {
      this.isLocal = options && options.local;
    }

    CssCompletion.prototype.hasHints = function(editor) {
      return true;
    };

    CssCompletion.prototype.insertRule = function(editor, selected) {
      var cursor, from, to, token;
      cursor = editor.getCursor();
      token = editor.getTokenAt(cursor);
      if (/^\s+$/.test(token.string)) {
        token = $.extend({}, token, {
          start: cursor.ch,
          end: cursor.ch,
          string: ""
        });
      }
      from = {
        line: cursor.line,
        ch: token.start
      };
      to = {
        line: cursor.line,
        ch: token.end
      };
      editor.replaceRange("" + selected + ": ;", from, to);
      cursor = editor.getCursor();
      return editor.setCursor(cursor.line, cursor.ch - 1);
    };

    CssCompletion.prototype.getPseudoSelectorCompletions = function(token, editor, cursor) {
      var isColon, prevToken, string, suggestion;
      prevToken = editor.getTokenAt({
        line: cursor.line,
        ch: token.start
      });
      isColon = token.string === ":";
      if (isColon || prevToken.string === ":") {
        string = isColon ? "" : token.string;
        return this.state.suggestions = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = pseudoSelectors.length; _i < _len; _i++) {
            suggestion = pseudoSelectors[_i];
            if (suggestion.indexOf(string) === 0) {
              _results.push({
                value: (isColon ? ":" + suggestion : suggestion),
                label: suggestion
              });
            }
          }
          return _results;
        })();
      }
    };

    CssCompletion.prototype.getRuleCompletions = function(token, editor, cursor) {
      var rule, string;
      string = token.string;
      return this.state.suggestions = (function() {
        var _results;
        _results = [];
        for (rule in rules) {
          if (rule.indexOf(string) === 0) {
            _results.push({
              value: rule,
              action: 'insertRule'
            });
          }
        }
        return _results;
      })();
    };

    CssCompletion.prototype.getUrlCompletions = function(token, editor, cursor) {
      var file, path;
      this.state.getString = function(token) {
        return token.string.replace(/^url?\(?"?'?/, '');
      };
      path = this.state.getString(token);
      return this.state.suggestions = (function() {
        var _i, _len, _ref, _results;
        _ref = design.bundles["public"].files_as_array;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.isImage() && (path === "" || file.path.indexOf(path))) {
            _results.push({
              value: "url(\"" + file.path + "\")",
              label: file.path
            });
          }
        }
        return _results;
      })();
    };

    CssCompletion.prototype.getValueCompletions = function(token, editor, cursor) {
      var rule, ruleToken, value;
      ruleToken = editor.getTokenAt({
        line: cursor.line,
        ch: token.start - 2
      });
      if (rule = ruleToken && rules[ruleToken.string]) {
        return this.state.suggestions = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = rule.length; _i < _len; _i++) {
            value = rule[_i];
            if ((value.label || value).toLowerCase().indexOf(token.string.toLowerCase()) === 0) {
              _results.push(value);
            }
          }
          return _results;
        })();
      }
    };

    CssCompletion.prototype.getCompletions = function(token, editor, cursor) {
      var stack;
      stack = this.isLocal ? token.state.localState.stack : token.state.stack;
      if ((token.state.stack.length === 0 && token.string === ":") || token.className === "tag") {
        return this.getPseudoSelectorCompletions(token, editor, cursor);
      } else if (token.className === "variable") {
        return this.getRuleCompletions(token, editor, cursor);
      } else if (token.className === "number" && token.string.indexOf("ur") === 0) {
        return this.getUrlCompletions(token, editor, cursor);
      } else if (stack.length === 2 && stack[1] === "rule") {
        return this.getValueCompletions(token, editor, cursor);
      }
    };

    CssCompletion.prototype.getHints = function(editor) {
      var cursor, string, suggestion, token;
      cursor = editor.getCursor();
      token = editor.getTokenAt(cursor);
      if (/^\s+$/.test(token.string)) {
        token = $.extend({}, token, {
          start: cursor.ch,
          end: cursor.ch,
          string: ""
        });
      }
      if (!(this.state && this.state.line === cursor.line && this.state.start === token.start && this.state.end === token.end - 1)) {
        this.state = {
          line: cursor.line,
          start: token.start
        };
      }
      this.state.end = token.end;
      if (this.state.suggestions && this.state.suggestions.length) {
        string = this.state.getString ? this.state.getString(token) : token.string;
        this.state.suggestions = (function() {
          var _i, _len, _ref, _results;
          _ref = this.state.suggestions;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            suggestion = _ref[_i];
            if ((suggestion.value || "").toLowerCase().indexOf((string || "").toLowerCase()) === 0) {
              _results.push(suggestion);
            }
          }
          return _results;
        }).call(this);
      } else {
        this.state.suggestions = this.getCompletions(token, editor, cursor);
      }
      if (this.state.suggestions && this.state.suggestions.length === 1 && this.state.suggestions[0].value === token.string) {
        return null;
      }
      return {
        list: this.state.suggestions,
        from: {
          line: cursor.line,
          ch: token.start
        },
        to: {
          line: cursor.line,
          ch: token.end
        }
      };
    };

    CssCompletion.prototype.autoSemicolon = function(editor, event) {
      var cursor, line, token;
      cursor = editor.getCursor();
      token = editor.getTokenAt(cursor);
      line = editor.getLine(cursor.line);
      if (token.state.stack.length === 2 && line.substr(cursor.ch, line.length).indexOf(";") === -1) {
        event.stop();
        editor.replaceRange(': ;', cursor);
        return editor.setCursor(cursor.line, cursor.ch + 2);
      }
    };

    CssCompletion.prototype.semiColon = function(editor, event) {
      var cursor, nextChar;
      cursor = editor.getCursor();
      nextChar = editor.getRange(cursor, {
        line: cursor.line,
        ch: cursor.ch + 1
      });
      if (nextChar === ";") {
        event.stop();
        return editor.setCursor(cursor.line, cursor.ch + 1);
      }
    };

    CssCompletion.prototype.autoInsertions = function(editor, event) {
      switch (event.charCode) {
        case 58:
          return this.autoSemicolon(editor, event);
        case 59:
          return this.semiColon(editor, event);
      }
    };

    return CssCompletion;

  })();

}).call(this);
