(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/choices.js/public/assets/scripts/choices.js
  var require_choices = __commonJS({
    "node_modules/choices.js/public/assets/scripts/choices.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["Choices"] = factory();
        else
          root["Choices"] = factory();
      })(window, function() {
        return function() {
          "use strict";
          var __webpack_modules__ = {
            282: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.clearChoices = exports2.activateChoices = exports2.filterChoices = exports2.addChoice = void 0;
              var constants_1 = __webpack_require__2(883);
              var addChoice = function(_a) {
                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                return {
                  type: constants_1.ACTION_TYPES.ADD_CHOICE,
                  value,
                  label,
                  id,
                  groupId,
                  disabled,
                  elementId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              exports2.addChoice = addChoice;
              var filterChoices = function(results) {
                return {
                  type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                  results
                };
              };
              exports2.filterChoices = filterChoices;
              var activateChoices = function(active) {
                if (active === void 0) {
                  active = true;
                }
                return {
                  type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                  active
                };
              };
              exports2.activateChoices = activateChoices;
              var clearChoices = function() {
                return {
                  type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                };
              };
              exports2.clearChoices = clearChoices;
            },
            783: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.addGroup = void 0;
              var constants_1 = __webpack_require__2(883);
              var addGroup = function(_a) {
                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                return {
                  type: constants_1.ACTION_TYPES.ADD_GROUP,
                  value,
                  id,
                  active,
                  disabled
                };
              };
              exports2.addGroup = addGroup;
            },
            464: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.highlightItem = exports2.removeItem = exports2.addItem = void 0;
              var constants_1 = __webpack_require__2(883);
              var addItem = function(_a) {
                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                return {
                  type: constants_1.ACTION_TYPES.ADD_ITEM,
                  value,
                  label,
                  id,
                  choiceId,
                  groupId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              exports2.addItem = addItem;
              var removeItem = function(id, choiceId) {
                return {
                  type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                  id,
                  choiceId
                };
              };
              exports2.removeItem = removeItem;
              var highlightItem = function(id, highlighted) {
                return {
                  type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                  id,
                  highlighted
                };
              };
              exports2.highlightItem = highlightItem;
            },
            137: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.setIsLoading = exports2.resetTo = exports2.clearAll = void 0;
              var constants_1 = __webpack_require__2(883);
              var clearAll = function() {
                return {
                  type: constants_1.ACTION_TYPES.CLEAR_ALL
                };
              };
              exports2.clearAll = clearAll;
              var resetTo = function(state) {
                return {
                  type: constants_1.ACTION_TYPES.RESET_TO,
                  state
                };
              };
              exports2.resetTo = resetTo;
              var setIsLoading = function(isLoading) {
                return {
                  type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                  isLoading
                };
              };
              exports2.setIsLoading = setIsLoading;
            },
            373: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var deepmerge_1 = __importDefault(__webpack_require__2(996));
              var fuse_js_1 = __importDefault(__webpack_require__2(221));
              var choices_1 = __webpack_require__2(282);
              var groups_1 = __webpack_require__2(783);
              var items_1 = __webpack_require__2(464);
              var misc_1 = __webpack_require__2(137);
              var components_1 = __webpack_require__2(520);
              var constants_1 = __webpack_require__2(883);
              var defaults_1 = __webpack_require__2(789);
              var utils_1 = __webpack_require__2(799);
              var reducers_1 = __webpack_require__2(655);
              var store_1 = __importDefault(__webpack_require__2(744));
              var templates_1 = __importDefault(__webpack_require__2(686));
              var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
              var USER_DEFAULTS = {};
              var Choices2 = function() {
                function Choices3(element, userConfig) {
                  var _this = this;
                  if (element === void 0) {
                    element = "[data-choice]";
                  }
                  if (userConfig === void 0) {
                    userConfig = {};
                  }
                  if (userConfig.allowHTML === void 0) {
                    console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                  }
                  this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices3.defaults.options, userConfig], {
                    arrayMerge: function(_, sourceArray) {
                      return __spreadArray([], sourceArray, true);
                    }
                  });
                  var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                  if (invalidConfigOptions.length) {
                    console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                  }
                  var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                  if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                    throw TypeError("Expected one of the following types text|select-one|select-multiple");
                  }
                  this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                  this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                  this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                  this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                  this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                  if (!["auto", "always"].includes("".concat(this.config.renderSelectedChoices))) {
                    this.config.renderSelectedChoices = "auto";
                  }
                  if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                    var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                    this.config.addItemFilter = re.test.bind(re);
                  }
                  if (this._isTextElement) {
                    this.passedElement = new components_1.WrappedInput({
                      element: passedElement,
                      classNames: this.config.classNames,
                      delimiter: this.config.delimiter
                    });
                  } else {
                    this.passedElement = new components_1.WrappedSelect({
                      element: passedElement,
                      classNames: this.config.classNames,
                      template: function(data2) {
                        return _this._templates.option(data2);
                      }
                    });
                  }
                  this.initialised = false;
                  this._store = new store_1.default();
                  this._initialState = reducers_1.defaultState;
                  this._currentState = reducers_1.defaultState;
                  this._prevState = reducers_1.defaultState;
                  this._currentValue = "";
                  this._canSearch = !!this.config.searchEnabled;
                  this._isScrollingOnIe = false;
                  this._highlightPosition = 0;
                  this._wasTap = true;
                  this._placeholderValue = this._generatePlaceholderValue();
                  this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                  this._direction = this.passedElement.dir;
                  if (!this._direction) {
                    var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                    var documentDirection = window.getComputedStyle(document.documentElement).direction;
                    if (elementDirection !== documentDirection) {
                      this._direction = elementDirection;
                    }
                  }
                  this._idNames = {
                    itemChoice: "item-choice"
                  };
                  if (this._isSelectElement) {
                    this._presetGroups = this.passedElement.optionGroups;
                    this._presetOptions = this.passedElement.options;
                  }
                  this._presetChoices = this.config.choices;
                  this._presetItems = this.config.items;
                  if (this.passedElement.value && this._isTextElement) {
                    var splitValues = this.passedElement.value.split(this.config.delimiter);
                    this._presetItems = this._presetItems.concat(splitValues);
                  }
                  if (this.passedElement.options) {
                    this.passedElement.options.forEach(function(option) {
                      _this._presetChoices.push({
                        value: option.value,
                        label: option.innerHTML,
                        selected: !!option.selected,
                        disabled: option.disabled || option.parentNode.disabled,
                        placeholder: option.value === "" || option.hasAttribute("placeholder"),
                        customProperties: option.dataset["custom-properties"]
                      });
                    });
                  }
                  this._render = this._render.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                  this._onKeyUp = this._onKeyUp.bind(this);
                  this._onKeyDown = this._onKeyDown.bind(this);
                  this._onClick = this._onClick.bind(this);
                  this._onTouchMove = this._onTouchMove.bind(this);
                  this._onTouchEnd = this._onTouchEnd.bind(this);
                  this._onMouseDown = this._onMouseDown.bind(this);
                  this._onMouseOver = this._onMouseOver.bind(this);
                  this._onFormReset = this._onFormReset.bind(this);
                  this._onSelectKey = this._onSelectKey.bind(this);
                  this._onEnterKey = this._onEnterKey.bind(this);
                  this._onEscapeKey = this._onEscapeKey.bind(this);
                  this._onDirectionKey = this._onDirectionKey.bind(this);
                  this._onDeleteKey = this._onDeleteKey.bind(this);
                  if (this.passedElement.isActive) {
                    if (!this.config.silent) {
                      console.warn("Trying to initialise Choices on element already initialised", {
                        element
                      });
                    }
                    this.initialised = true;
                    return;
                  }
                  this.init();
                }
                Object.defineProperty(Choices3, "defaults", {
                  get: function() {
                    return Object.preventExtensions({
                      get options() {
                        return USER_DEFAULTS;
                      },
                      get templates() {
                        return templates_1.default;
                      }
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Choices3.prototype.init = function() {
                  if (this.initialised) {
                    return;
                  }
                  this._createTemplates();
                  this._createElements();
                  this._createStructure();
                  this._store.subscribe(this._render);
                  this._render();
                  this._addEventListeners();
                  var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                  if (shouldDisable) {
                    this.disable();
                  }
                  this.initialised = true;
                  var callbackOnInit = this.config.callbackOnInit;
                  if (callbackOnInit && typeof callbackOnInit === "function") {
                    callbackOnInit.call(this);
                  }
                };
                Choices3.prototype.destroy = function() {
                  if (!this.initialised) {
                    return;
                  }
                  this._removeEventListeners();
                  this.passedElement.reveal();
                  this.containerOuter.unwrap(this.passedElement.element);
                  this.clearStore();
                  if (this._isSelectElement) {
                    this.passedElement.options = this._presetOptions;
                  }
                  this._templates = templates_1.default;
                  this.initialised = false;
                };
                Choices3.prototype.enable = function() {
                  if (this.passedElement.isDisabled) {
                    this.passedElement.enable();
                  }
                  if (this.containerOuter.isDisabled) {
                    this._addEventListeners();
                    this.input.enable();
                    this.containerOuter.enable();
                  }
                  return this;
                };
                Choices3.prototype.disable = function() {
                  if (!this.passedElement.isDisabled) {
                    this.passedElement.disable();
                  }
                  if (!this.containerOuter.isDisabled) {
                    this._removeEventListeners();
                    this.input.disable();
                    this.containerOuter.disable();
                  }
                  return this;
                };
                Choices3.prototype.highlightItem = function(item, runEvent) {
                  if (runEvent === void 0) {
                    runEvent = true;
                  }
                  if (!item || !item.id) {
                    return this;
                  }
                  var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch((0, items_1.highlightItem)(id, true));
                  if (runEvent) {
                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                      id,
                      value,
                      label,
                      groupValue: group && group.value ? group.value : null
                    });
                  }
                  return this;
                };
                Choices3.prototype.unhighlightItem = function(item) {
                  if (!item || !item.id) {
                    return this;
                  }
                  var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch((0, items_1.highlightItem)(id, false));
                  this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                    id,
                    value,
                    label,
                    groupValue: group && group.value ? group.value : null
                  });
                  return this;
                };
                Choices3.prototype.highlightAll = function() {
                  var _this = this;
                  this._store.items.forEach(function(item) {
                    return _this.highlightItem(item);
                  });
                  return this;
                };
                Choices3.prototype.unhighlightAll = function() {
                  var _this = this;
                  this._store.items.forEach(function(item) {
                    return _this.unhighlightItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeActiveItemsByValue = function(value) {
                  var _this = this;
                  this._store.activeItems.filter(function(item) {
                    return item.value === value;
                  }).forEach(function(item) {
                    return _this._removeItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeActiveItems = function(excludedId) {
                  var _this = this;
                  this._store.activeItems.filter(function(_a) {
                    var id = _a.id;
                    return id !== excludedId;
                  }).forEach(function(item) {
                    return _this._removeItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeHighlightedItems = function(runEvent) {
                  var _this = this;
                  if (runEvent === void 0) {
                    runEvent = false;
                  }
                  this._store.highlightedActiveItems.forEach(function(item) {
                    _this._removeItem(item);
                    if (runEvent) {
                      _this._triggerChange(item.value);
                    }
                  });
                  return this;
                };
                Choices3.prototype.showDropdown = function(preventInputFocus) {
                  var _this = this;
                  if (this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this.dropdown.show();
                    _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                    if (!preventInputFocus && _this._canSearch) {
                      _this.input.focus();
                    }
                    _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                  });
                  return this;
                };
                Choices3.prototype.hideDropdown = function(preventInputBlur) {
                  var _this = this;
                  if (!this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this.dropdown.hide();
                    _this.containerOuter.close();
                    if (!preventInputBlur && _this._canSearch) {
                      _this.input.removeActiveDescendant();
                      _this.input.blur();
                    }
                    _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                  });
                  return this;
                };
                Choices3.prototype.getValue = function(valueOnly) {
                  if (valueOnly === void 0) {
                    valueOnly = false;
                  }
                  var values = this._store.activeItems.reduce(function(selectedItems, item) {
                    var itemValue = valueOnly ? item.value : item;
                    selectedItems.push(itemValue);
                    return selectedItems;
                  }, []);
                  return this._isSelectOneElement ? values[0] : values;
                };
                Choices3.prototype.setValue = function(items) {
                  var _this = this;
                  if (!this.initialised) {
                    return this;
                  }
                  items.forEach(function(value) {
                    return _this._setChoiceOrItem(value);
                  });
                  return this;
                };
                Choices3.prototype.setChoiceByValue = function(value) {
                  var _this = this;
                  if (!this.initialised || this._isTextElement) {
                    return this;
                  }
                  var choiceValue = Array.isArray(value) ? value : [value];
                  choiceValue.forEach(function(val) {
                    return _this._findAndSelectChoiceByValue(val);
                  });
                  return this;
                };
                Choices3.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                  var _this = this;
                  if (choicesArrayOrFetcher === void 0) {
                    choicesArrayOrFetcher = [];
                  }
                  if (value === void 0) {
                    value = "value";
                  }
                  if (label === void 0) {
                    label = "label";
                  }
                  if (replaceChoices === void 0) {
                    replaceChoices = false;
                  }
                  if (!this.initialised) {
                    throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                  }
                  if (!this._isSelectElement) {
                    throw new TypeError("setChoices can't be used with INPUT based Choices");
                  }
                  if (typeof value !== "string" || !value) {
                    throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                  }
                  if (replaceChoices) {
                    this.clearChoices();
                  }
                  if (typeof choicesArrayOrFetcher === "function") {
                    var fetcher_1 = choicesArrayOrFetcher(this);
                    if (typeof Promise === "function" && fetcher_1 instanceof Promise) {
                      return new Promise(function(resolve) {
                        return requestAnimationFrame(resolve);
                      }).then(function() {
                        return _this._handleLoadingState(true);
                      }).then(function() {
                        return fetcher_1;
                      }).then(function(data2) {
                        return _this.setChoices(data2, value, label, replaceChoices);
                      }).catch(function(err) {
                        if (!_this.config.silent) {
                          console.error(err);
                        }
                      }).then(function() {
                        return _this._handleLoadingState(false);
                      }).then(function() {
                        return _this;
                      });
                    }
                    if (!Array.isArray(fetcher_1)) {
                      throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                    }
                    return this.setChoices(fetcher_1, value, label, false);
                  }
                  if (!Array.isArray(choicesArrayOrFetcher)) {
                    throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                  }
                  this.containerOuter.removeLoadingState();
                  this._startLoading();
                  choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                    if (groupOrChoice.choices) {
                      _this._addGroup({
                        id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                        group: groupOrChoice,
                        valueKey: value,
                        labelKey: label
                      });
                    } else {
                      var choice = groupOrChoice;
                      _this._addChoice({
                        value: choice[value],
                        label: choice[label],
                        isSelected: !!choice.selected,
                        isDisabled: !!choice.disabled,
                        placeholder: !!choice.placeholder,
                        customProperties: choice.customProperties
                      });
                    }
                  });
                  this._stopLoading();
                  return this;
                };
                Choices3.prototype.clearChoices = function() {
                  this._store.dispatch((0, choices_1.clearChoices)());
                  return this;
                };
                Choices3.prototype.clearStore = function() {
                  this._store.dispatch((0, misc_1.clearAll)());
                  return this;
                };
                Choices3.prototype.clearInput = function() {
                  var shouldSetInputWidth = !this._isSelectOneElement;
                  this.input.clear(shouldSetInputWidth);
                  if (!this._isTextElement && this._canSearch) {
                    this._isSearching = false;
                    this._store.dispatch((0, choices_1.activateChoices)(true));
                  }
                  return this;
                };
                Choices3.prototype._render = function() {
                  if (this._store.isLoading()) {
                    return;
                  }
                  this._currentState = this._store.state;
                  var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                  var shouldRenderChoices = this._isSelectElement;
                  var shouldRenderItems = this._currentState.items !== this._prevState.items;
                  if (!stateChanged) {
                    return;
                  }
                  if (shouldRenderChoices) {
                    this._renderChoices();
                  }
                  if (shouldRenderItems) {
                    this._renderItems();
                  }
                  this._prevState = this._currentState;
                };
                Choices3.prototype._renderChoices = function() {
                  var _this = this;
                  var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                  var choiceListFragment = document.createDocumentFragment();
                  this.choiceList.clear();
                  if (this.config.resetScrollPosition) {
                    requestAnimationFrame(function() {
                      return _this.choiceList.scrollToTop();
                    });
                  }
                  if (activeGroups.length >= 1 && !this._isSearching) {
                    var activePlaceholders = activeChoices.filter(function(activeChoice) {
                      return activeChoice.placeholder === true && activeChoice.groupId === -1;
                    });
                    if (activePlaceholders.length >= 1) {
                      choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                    }
                    choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                  } else if (activeChoices.length >= 1) {
                    choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                  }
                  if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                    var activeItems = this._store.activeItems;
                    var canAddItem = this._canAddItem(activeItems, this.input.value);
                    if (canAddItem.response) {
                      this.choiceList.append(choiceListFragment);
                      this._highlightChoice();
                    } else {
                      var notice = this._getTemplate("notice", canAddItem.notice);
                      this.choiceList.append(notice);
                    }
                  } else {
                    var dropdownItem = void 0;
                    var notice = void 0;
                    if (this._isSearching) {
                      notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                      dropdownItem = this._getTemplate("notice", notice, "no-results");
                    } else {
                      notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                      dropdownItem = this._getTemplate("notice", notice, "no-choices");
                    }
                    this.choiceList.append(dropdownItem);
                  }
                };
                Choices3.prototype._renderItems = function() {
                  var activeItems = this._store.activeItems || [];
                  this.itemList.clear();
                  var itemListFragment = this._createItemsFragment(activeItems);
                  if (itemListFragment.childNodes) {
                    this.itemList.append(itemListFragment);
                  }
                };
                Choices3.prototype._createGroupsFragment = function(groups, choices, fragment) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var getGroupChoices = function(group) {
                    return choices.filter(function(choice) {
                      if (_this._isSelectOneElement) {
                        return choice.groupId === group.id;
                      }
                      return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                    });
                  };
                  if (this.config.shouldSort) {
                    groups.sort(this.config.sorter);
                  }
                  groups.forEach(function(group) {
                    var groupChoices = getGroupChoices(group);
                    if (groupChoices.length >= 1) {
                      var dropdownGroup = _this._getTemplate("choiceGroup", group);
                      fragment.appendChild(dropdownGroup);
                      _this._createChoicesFragment(groupChoices, fragment, true);
                    }
                  });
                  return fragment;
                };
                Choices3.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  if (withinGroup === void 0) {
                    withinGroup = false;
                  }
                  var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                  var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                  var appendChoice = function(choice) {
                    var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                    if (shouldRender) {
                      var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                      fragment.appendChild(dropdownItem);
                    }
                  };
                  var rendererableChoices = choices;
                  if (renderSelectedChoices === "auto" && !this._isSelectOneElement) {
                    rendererableChoices = choices.filter(function(choice) {
                      return !choice.selected;
                    });
                  }
                  var _b = rendererableChoices.reduce(function(acc, choice) {
                    if (choice.placeholder) {
                      acc.placeholderChoices.push(choice);
                    } else {
                      acc.normalChoices.push(choice);
                    }
                    return acc;
                  }, {
                    placeholderChoices: [],
                    normalChoices: []
                  }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                  if (this.config.shouldSort || this._isSearching) {
                    normalChoices.sort(filter);
                  }
                  var choiceLimit = rendererableChoices.length;
                  var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                  if (this._isSearching) {
                    choiceLimit = searchResultLimit;
                  } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                    choiceLimit = renderChoiceLimit;
                  }
                  for (var i = 0; i < choiceLimit; i += 1) {
                    if (sortedChoices[i]) {
                      appendChoice(sortedChoices[i]);
                    }
                  }
                  return fragment;
                };
                Choices3.prototype._createItemsFragment = function(items, fragment) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                  if (shouldSortItems && !this._isSelectOneElement) {
                    items.sort(sorter);
                  }
                  if (this._isTextElement) {
                    this.passedElement.value = items.map(function(_a2) {
                      var value = _a2.value;
                      return value;
                    }).join(this.config.delimiter);
                  } else {
                    this.passedElement.options = items;
                  }
                  var addItemToFragment = function(item) {
                    var listItem = _this._getTemplate("item", item, removeItemButton);
                    fragment.appendChild(listItem);
                  };
                  items.forEach(addItemToFragment);
                  return fragment;
                };
                Choices3.prototype._triggerChange = function(value) {
                  if (value === void 0 || value === null) {
                    return;
                  }
                  this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                    value
                  });
                };
                Choices3.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                  this._addItem({
                    value: placeholderChoice.value,
                    label: placeholderChoice.label,
                    choiceId: placeholderChoice.id,
                    groupId: placeholderChoice.groupId,
                    placeholder: placeholderChoice.placeholder
                  });
                  this._triggerChange(placeholderChoice.value);
                };
                Choices3.prototype._handleButtonAction = function(activeItems, element) {
                  if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                    return;
                  }
                  var itemId = element.parentNode && element.parentNode.dataset.id;
                  var itemToRemove = itemId && activeItems.find(function(item) {
                    return item.id === parseInt(itemId, 10);
                  });
                  if (!itemToRemove) {
                    return;
                  }
                  this._removeItem(itemToRemove);
                  this._triggerChange(itemToRemove.value);
                  if (this._isSelectOneElement && this._store.placeholderChoice) {
                    this._selectPlaceholderChoice(this._store.placeholderChoice);
                  }
                };
                Choices3.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                  var _this = this;
                  if (hasShiftKey === void 0) {
                    hasShiftKey = false;
                  }
                  if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                    return;
                  }
                  var passedId = element.dataset.id;
                  activeItems.forEach(function(item) {
                    if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
                      _this.highlightItem(item);
                    } else if (!hasShiftKey && item.highlighted) {
                      _this.unhighlightItem(item);
                    }
                  });
                  this.input.focus();
                };
                Choices3.prototype._handleChoiceAction = function(activeItems, element) {
                  if (!activeItems || !element) {
                    return;
                  }
                  var id = element.dataset.id;
                  var choice = id && this._store.getChoiceById(id);
                  if (!choice) {
                    return;
                  }
                  var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                  var hasActiveDropdown = this.dropdown.isActive;
                  choice.keyCode = passedKeyCode;
                  this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                    choice
                  });
                  if (!choice.selected && !choice.disabled) {
                    var canAddItem = this._canAddItem(activeItems, choice.value);
                    if (canAddItem.response) {
                      this._addItem({
                        value: choice.value,
                        label: choice.label,
                        choiceId: choice.id,
                        groupId: choice.groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder,
                        keyCode: choice.keyCode
                      });
                      this._triggerChange(choice.value);
                    }
                  }
                  this.clearInput();
                  if (hasActiveDropdown && this._isSelectOneElement) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                Choices3.prototype._handleBackspace = function(activeItems) {
                  if (!this.config.removeItems || !activeItems) {
                    return;
                  }
                  var lastItem = activeItems[activeItems.length - 1];
                  var hasHighlightedItems = activeItems.some(function(item) {
                    return item.highlighted;
                  });
                  if (this.config.editItems && !hasHighlightedItems && lastItem) {
                    this.input.value = lastItem.value;
                    this.input.setWidth();
                    this._removeItem(lastItem);
                    this._triggerChange(lastItem.value);
                  } else {
                    if (!hasHighlightedItems) {
                      this.highlightItem(lastItem, false);
                    }
                    this.removeHighlightedItems(true);
                  }
                };
                Choices3.prototype._startLoading = function() {
                  this._store.dispatch((0, misc_1.setIsLoading)(true));
                };
                Choices3.prototype._stopLoading = function() {
                  this._store.dispatch((0, misc_1.setIsLoading)(false));
                };
                Choices3.prototype._handleLoadingState = function(setLoading) {
                  if (setLoading === void 0) {
                    setLoading = true;
                  }
                  var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                  if (setLoading) {
                    this.disable();
                    this.containerOuter.addLoadingState();
                    if (this._isSelectOneElement) {
                      if (!placeholderItem) {
                        placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                        if (placeholderItem) {
                          this.itemList.append(placeholderItem);
                        }
                      } else {
                        placeholderItem.innerHTML = this.config.loadingText;
                      }
                    } else {
                      this.input.placeholder = this.config.loadingText;
                    }
                  } else {
                    this.enable();
                    this.containerOuter.removeLoadingState();
                    if (this._isSelectOneElement) {
                      if (placeholderItem) {
                        placeholderItem.innerHTML = this._placeholderValue || "";
                      }
                    } else {
                      this.input.placeholder = this._placeholderValue || "";
                    }
                  }
                };
                Choices3.prototype._handleSearch = function(value) {
                  if (!this.input.isFocussed) {
                    return;
                  }
                  var choices = this._store.choices;
                  var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                  var hasUnactiveChoices = choices.some(function(option) {
                    return !option.active;
                  });
                  if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                    var resultCount = searchChoices ? this._searchChoices(value) : 0;
                    this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                      value,
                      resultCount
                    });
                  } else if (hasUnactiveChoices) {
                    this._isSearching = false;
                    this._store.dispatch((0, choices_1.activateChoices)(true));
                  }
                };
                Choices3.prototype._canAddItem = function(activeItems, value) {
                  var canAddItem = true;
                  var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                  if (!this._isSelectOneElement) {
                    var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                    if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                      canAddItem = false;
                      notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                    }
                    if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                      canAddItem = false;
                      notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                    }
                    if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                      canAddItem = false;
                      notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                    }
                  }
                  return {
                    response: canAddItem,
                    notice
                  };
                };
                Choices3.prototype._searchChoices = function(value) {
                  var newValue = typeof value === "string" ? value.trim() : value;
                  var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                  if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
                    return 0;
                  }
                  var haystack = this._store.searchableChoices;
                  var needle = newValue;
                  var options = Object.assign(this.config.fuseOptions, {
                    keys: __spreadArray([], this.config.searchFields, true),
                    includeMatches: true
                  });
                  var fuse = new fuse_js_1.default(haystack, options);
                  var results = fuse.search(needle);
                  this._currentValue = newValue;
                  this._highlightPosition = 0;
                  this._isSearching = true;
                  this._store.dispatch((0, choices_1.filterChoices)(results));
                  return results.length;
                };
                Choices3.prototype._addEventListeners = function() {
                  var documentElement = document.documentElement;
                  documentElement.addEventListener("touchend", this._onTouchEnd, true);
                  this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                  this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                  documentElement.addEventListener("click", this._onClick, {
                    passive: true
                  });
                  documentElement.addEventListener("touchmove", this._onTouchMove, {
                    passive: true
                  });
                  this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                    passive: true
                  });
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.addEventListener("focus", this._onFocus, {
                      passive: true
                    });
                    this.containerOuter.element.addEventListener("blur", this._onBlur, {
                      passive: true
                    });
                  }
                  this.input.element.addEventListener("keyup", this._onKeyUp, {
                    passive: true
                  });
                  this.input.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.input.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                  if (this.input.element.form) {
                    this.input.element.form.addEventListener("reset", this._onFormReset, {
                      passive: true
                    });
                  }
                  this.input.addEventListeners();
                };
                Choices3.prototype._removeEventListeners = function() {
                  var documentElement = document.documentElement;
                  documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                  this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                  this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                  documentElement.removeEventListener("click", this._onClick);
                  documentElement.removeEventListener("touchmove", this._onTouchMove);
                  this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.removeEventListener("focus", this._onFocus);
                    this.containerOuter.element.removeEventListener("blur", this._onBlur);
                  }
                  this.input.element.removeEventListener("keyup", this._onKeyUp);
                  this.input.element.removeEventListener("focus", this._onFocus);
                  this.input.element.removeEventListener("blur", this._onBlur);
                  if (this.input.element.form) {
                    this.input.element.form.removeEventListener("reset", this._onFormReset);
                  }
                  this.input.removeEventListeners();
                };
                Choices3.prototype._onKeyDown = function(event) {
                  var keyCode = event.keyCode;
                  var activeItems = this._store.activeItems;
                  var hasFocusedInput = this.input.isFocussed;
                  var hasActiveDropdown = this.dropdown.isActive;
                  var hasItems = this.itemList.hasChildren();
                  var keyString = String.fromCharCode(keyCode);
                  var wasAlphaNumericChar = /[a-zA-Z0-9-_ ]/.test(keyString);
                  var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                  if (!this._isTextElement && !hasActiveDropdown && wasAlphaNumericChar) {
                    this.showDropdown();
                    if (!this.input.isFocussed) {
                      this.input.value += keyString.toLowerCase();
                    }
                  }
                  switch (keyCode) {
                    case A_KEY:
                      return this._onSelectKey(event, hasItems);
                    case ENTER_KEY:
                      return this._onEnterKey(event, activeItems, hasActiveDropdown);
                    case ESC_KEY:
                      return this._onEscapeKey(hasActiveDropdown);
                    case UP_KEY:
                    case PAGE_UP_KEY:
                    case DOWN_KEY:
                    case PAGE_DOWN_KEY:
                      return this._onDirectionKey(event, hasActiveDropdown);
                    case DELETE_KEY:
                    case BACK_KEY:
                      return this._onDeleteKey(event, activeItems, hasFocusedInput);
                    default:
                  }
                };
                Choices3.prototype._onKeyUp = function(_a) {
                  var target = _a.target, keyCode = _a.keyCode;
                  var value = this.input.value;
                  var activeItems = this._store.activeItems;
                  var canAddItem = this._canAddItem(activeItems, value);
                  var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                  if (this._isTextElement) {
                    var canShowDropdownNotice = canAddItem.notice && value;
                    if (canShowDropdownNotice) {
                      var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                      this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                      this.showDropdown(true);
                    } else {
                      this.hideDropdown(true);
                    }
                  } else {
                    var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                    var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                    var canReactivateChoices = !this._isTextElement && this._isSearching;
                    var canSearch = this._canSearch && canAddItem.response;
                    if (userHasRemovedValue && canReactivateChoices) {
                      this._isSearching = false;
                      this._store.dispatch((0, choices_1.activateChoices)(true));
                    } else if (canSearch) {
                      this._handleSearch(this.input.rawValue);
                    }
                  }
                  this._canSearch = this.config.searchEnabled;
                };
                Choices3.prototype._onSelectKey = function(event, hasItems) {
                  var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                  var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                  if (hasCtrlDownKeyPressed && hasItems) {
                    this._canSearch = false;
                    var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                    if (shouldHightlightAll) {
                      this.highlightAll();
                    }
                  }
                };
                Choices3.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                  var target = event.target;
                  var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                  var targetWasButton = target && target.hasAttribute("data-button");
                  if (this._isTextElement && target && target.value) {
                    var value = this.input.value;
                    var canAddItem = this._canAddItem(activeItems, value);
                    if (canAddItem.response) {
                      this.hideDropdown(true);
                      this._addItem({
                        value
                      });
                      this._triggerChange(value);
                      this.clearInput();
                    }
                  }
                  if (targetWasButton) {
                    this._handleButtonAction(activeItems, target);
                    event.preventDefault();
                  }
                  if (hasActiveDropdown) {
                    var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                    if (highlightedChoice) {
                      if (activeItems[0]) {
                        activeItems[0].keyCode = enterKey;
                      }
                      this._handleChoiceAction(activeItems, highlightedChoice);
                    }
                    event.preventDefault();
                  } else if (this._isSelectOneElement) {
                    this.showDropdown();
                    event.preventDefault();
                  }
                };
                Choices3.prototype._onEscapeKey = function(hasActiveDropdown) {
                  if (hasActiveDropdown) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                Choices3.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                  var keyCode = event.keyCode, metaKey = event.metaKey;
                  var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                  if (hasActiveDropdown || this._isSelectOneElement) {
                    this.showDropdown();
                    this._canSearch = false;
                    var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                    var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                    var selectableChoiceIdentifier = "[data-choice-selectable]";
                    var nextEl = void 0;
                    if (skipKey) {
                      if (directionInt > 0) {
                        nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    } else {
                      var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                      if (currentEl) {
                        nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    }
                    if (nextEl) {
                      if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
                        this.choiceList.scrollToChildElement(nextEl, directionInt);
                      }
                      this._highlightChoice(nextEl);
                    }
                    event.preventDefault();
                  }
                };
                Choices3.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                  var target = event.target;
                  if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                    this._handleBackspace(activeItems);
                    event.preventDefault();
                  }
                };
                Choices3.prototype._onTouchMove = function() {
                  if (this._wasTap) {
                    this._wasTap = false;
                  }
                };
                Choices3.prototype._onTouchEnd = function(event) {
                  var target = (event || event.touches[0]).target;
                  var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                  if (touchWasWithinContainer) {
                    var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                    if (containerWasExactTarget) {
                      if (this._isTextElement) {
                        this.input.focus();
                      } else if (this._isSelectMultipleElement) {
                        this.showDropdown();
                      }
                    }
                    event.stopPropagation();
                  }
                  this._wasTap = true;
                };
                Choices3.prototype._onMouseDown = function(event) {
                  var target = event.target;
                  if (!(target instanceof HTMLElement)) {
                    return;
                  }
                  if (IS_IE11 && this.choiceList.element.contains(target)) {
                    var firstChoice = this.choiceList.element.firstElementChild;
                    var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                    this._isScrollingOnIe = isOnScrollbar;
                  }
                  if (target === this.input.element) {
                    return;
                  }
                  var item = target.closest("[data-button],[data-item],[data-choice]");
                  if (item instanceof HTMLElement) {
                    var hasShiftKey = event.shiftKey;
                    var activeItems = this._store.activeItems;
                    var dataset = item.dataset;
                    if ("button" in dataset) {
                      this._handleButtonAction(activeItems, item);
                    } else if ("item" in dataset) {
                      this._handleItemAction(activeItems, item, hasShiftKey);
                    } else if ("choice" in dataset) {
                      this._handleChoiceAction(activeItems, item);
                    }
                  }
                  event.preventDefault();
                };
                Choices3.prototype._onMouseOver = function(_a) {
                  var target = _a.target;
                  if (target instanceof HTMLElement && "choice" in target.dataset) {
                    this._highlightChoice(target);
                  }
                };
                Choices3.prototype._onClick = function(_a) {
                  var target = _a.target;
                  var clickWasWithinContainer = this.containerOuter.element.contains(target);
                  if (clickWasWithinContainer) {
                    if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                      if (this._isTextElement) {
                        if (document.activeElement !== this.input.element) {
                          this.input.focus();
                        }
                      } else {
                        this.showDropdown();
                        this.containerOuter.focus();
                      }
                    } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                      this.hideDropdown();
                    }
                  } else {
                    var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                    if (hasHighlightedItems) {
                      this.unhighlightAll();
                    }
                    this.containerOuter.removeFocusState();
                    this.hideDropdown(true);
                  }
                };
                Choices3.prototype._onFocus = function(_a) {
                  var _b;
                  var _this = this;
                  var target = _a.target;
                  var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                  if (!focusWasWithinContainer) {
                    return;
                  }
                  var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                    if (target === _this.input.element) {
                      _this.containerOuter.addFocusState();
                    }
                  }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                    _this.containerOuter.addFocusState();
                    if (target === _this.input.element) {
                      _this.showDropdown(true);
                    }
                  }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                    if (target === _this.input.element) {
                      _this.showDropdown(true);
                      _this.containerOuter.addFocusState();
                    }
                  }, _b);
                  focusActions[this.passedElement.element.type]();
                };
                Choices3.prototype._onBlur = function(_a) {
                  var _b;
                  var _this = this;
                  var target = _a.target;
                  var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                  if (blurWasWithinContainer && !this._isScrollingOnIe) {
                    var activeItems = this._store.activeItems;
                    var hasHighlightedItems_1 = activeItems.some(function(item) {
                      return item.highlighted;
                    });
                    var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                      if (target === _this.input.element) {
                        _this.containerOuter.removeFocusState();
                        if (hasHighlightedItems_1) {
                          _this.unhighlightAll();
                        }
                        _this.hideDropdown(true);
                      }
                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                      _this.containerOuter.removeFocusState();
                      if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
                        _this.hideDropdown(true);
                      }
                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                      if (target === _this.input.element) {
                        _this.containerOuter.removeFocusState();
                        _this.hideDropdown(true);
                        if (hasHighlightedItems_1) {
                          _this.unhighlightAll();
                        }
                      }
                    }, _b);
                    blurActions[this.passedElement.element.type]();
                  } else {
                    this._isScrollingOnIe = false;
                    this.input.element.focus();
                  }
                };
                Choices3.prototype._onFormReset = function() {
                  this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                };
                Choices3.prototype._highlightChoice = function(el) {
                  var _this = this;
                  if (el === void 0) {
                    el = null;
                  }
                  var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                  if (!choices.length) {
                    return;
                  }
                  var passedEl = el;
                  var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                  highlightedChoices.forEach(function(choice) {
                    choice.classList.remove(_this.config.classNames.highlightedState);
                    choice.setAttribute("aria-selected", "false");
                  });
                  if (passedEl) {
                    this._highlightPosition = choices.indexOf(passedEl);
                  } else {
                    if (choices.length > this._highlightPosition) {
                      passedEl = choices[this._highlightPosition];
                    } else {
                      passedEl = choices[choices.length - 1];
                    }
                    if (!passedEl) {
                      passedEl = choices[0];
                    }
                  }
                  passedEl.classList.add(this.config.classNames.highlightedState);
                  passedEl.setAttribute("aria-selected", "true");
                  this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                    el: passedEl
                  });
                  if (this.dropdown.isActive) {
                    this.input.setActiveDescendant(passedEl.id);
                    this.containerOuter.setActiveDescendant(passedEl.id);
                  }
                };
                Choices3.prototype._addItem = function(_a) {
                  var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                  var passedValue = typeof value === "string" ? value.trim() : value;
                  var items = this._store.items;
                  var passedLabel = label || passedValue;
                  var passedOptionId = choiceId || -1;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  var id = items ? items.length + 1 : 1;
                  if (this.config.prependValue) {
                    passedValue = this.config.prependValue + passedValue.toString();
                  }
                  if (this.config.appendValue) {
                    passedValue += this.config.appendValue.toString();
                  }
                  this._store.dispatch((0, items_1.addItem)({
                    value: passedValue,
                    label: passedLabel,
                    id,
                    choiceId: passedOptionId,
                    groupId,
                    customProperties,
                    placeholder,
                    keyCode
                  }));
                  if (this._isSelectOneElement) {
                    this.removeActiveItems(id);
                  }
                  this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                    id,
                    value: passedValue,
                    label: passedLabel,
                    customProperties,
                    groupValue: group && group.value ? group.value : null,
                    keyCode
                  });
                };
                Choices3.prototype._removeItem = function(item) {
                  var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                  var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  if (!id || !choiceId) {
                    return;
                  }
                  this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                  this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                    id,
                    value,
                    label,
                    customProperties,
                    groupValue: group && group.value ? group.value : null
                  });
                };
                Choices3.prototype._addChoice = function(_a) {
                  var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                  if (typeof value === "undefined" || value === null) {
                    return;
                  }
                  var choices = this._store.choices;
                  var choiceLabel = label || value;
                  var choiceId = choices ? choices.length + 1 : 1;
                  var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                  this._store.dispatch((0, choices_1.addChoice)({
                    id: choiceId,
                    groupId,
                    elementId: choiceElementId,
                    value,
                    label: choiceLabel,
                    disabled: isDisabled,
                    customProperties,
                    placeholder,
                    keyCode
                  }));
                  if (isSelected) {
                    this._addItem({
                      value,
                      label: choiceLabel,
                      choiceId,
                      customProperties,
                      placeholder,
                      keyCode
                    });
                  }
                };
                Choices3.prototype._addGroup = function(_a) {
                  var _this = this;
                  var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                  var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                  var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                  var isDisabled = group.disabled ? group.disabled : false;
                  if (groupChoices) {
                    this._store.dispatch((0, groups_1.addGroup)({
                      value: group.label,
                      id: groupId,
                      active: true,
                      disabled: isDisabled
                    }));
                    var addGroupChoices = function(choice) {
                      var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                      _this._addChoice({
                        value: choice[valueKey],
                        label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                        isSelected: choice.selected,
                        isDisabled: isOptDisabled,
                        groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder
                      });
                    };
                    groupChoices.forEach(addGroupChoices);
                  } else {
                    this._store.dispatch((0, groups_1.addGroup)({
                      value: group.label,
                      id: group.id,
                      active: false,
                      disabled: group.disabled
                    }));
                  }
                };
                Choices3.prototype._getTemplate = function(template) {
                  var _a;
                  var args = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                  }
                  return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
                };
                Choices3.prototype._createTemplates = function() {
                  var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                  var userTemplates = {};
                  if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") {
                    userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                  }
                  this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                };
                Choices3.prototype._createElements = function() {
                  this.containerOuter = new components_1.Container({
                    element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.containerInner = new components_1.Container({
                    element: this._getTemplate("containerInner"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.input = new components_1.Input({
                    element: this._getTemplate("input", this._placeholderValue),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    preventPaste: !this.config.paste
                  });
                  this.choiceList = new components_1.List({
                    element: this._getTemplate("choiceList", this._isSelectOneElement)
                  });
                  this.itemList = new components_1.List({
                    element: this._getTemplate("itemList", this._isSelectOneElement)
                  });
                  this.dropdown = new components_1.Dropdown({
                    element: this._getTemplate("dropdown"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type
                  });
                };
                Choices3.prototype._createStructure = function() {
                  this.passedElement.conceal();
                  this.containerInner.wrap(this.passedElement.element);
                  this.containerOuter.wrap(this.containerInner.element);
                  if (this._isSelectOneElement) {
                    this.input.placeholder = this.config.searchPlaceholderValue || "";
                  } else if (this._placeholderValue) {
                    this.input.placeholder = this._placeholderValue;
                    this.input.setWidth();
                  }
                  this.containerOuter.element.appendChild(this.containerInner.element);
                  this.containerOuter.element.appendChild(this.dropdown.element);
                  this.containerInner.element.appendChild(this.itemList.element);
                  if (!this._isTextElement) {
                    this.dropdown.element.appendChild(this.choiceList.element);
                  }
                  if (!this._isSelectOneElement) {
                    this.containerInner.element.appendChild(this.input.element);
                  } else if (this.config.searchEnabled) {
                    this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                  }
                  if (this._isSelectElement) {
                    this._highlightPosition = 0;
                    this._isSearching = false;
                    this._startLoading();
                    if (this._presetGroups.length) {
                      this._addPredefinedGroups(this._presetGroups);
                    } else {
                      this._addPredefinedChoices(this._presetChoices);
                    }
                    this._stopLoading();
                  }
                  if (this._isTextElement) {
                    this._addPredefinedItems(this._presetItems);
                  }
                };
                Choices3.prototype._addPredefinedGroups = function(groups) {
                  var _this = this;
                  var placeholderChoice = this.passedElement.placeholderOption;
                  if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") {
                    this._addChoice({
                      value: placeholderChoice.value,
                      label: placeholderChoice.innerHTML,
                      isSelected: placeholderChoice.selected,
                      isDisabled: placeholderChoice.disabled,
                      placeholder: true
                    });
                  }
                  groups.forEach(function(group) {
                    return _this._addGroup({
                      group,
                      id: group.id || null
                    });
                  });
                };
                Choices3.prototype._addPredefinedChoices = function(choices) {
                  var _this = this;
                  if (this.config.shouldSort) {
                    choices.sort(this.config.sorter);
                  }
                  var hasSelectedChoice = choices.some(function(choice) {
                    return choice.selected;
                  });
                  var firstEnabledChoiceIndex = choices.findIndex(function(choice) {
                    return choice.disabled === void 0 || !choice.disabled;
                  });
                  choices.forEach(function(choice, index) {
                    var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                    if (_this._isSelectElement) {
                      if (choice.choices) {
                        _this._addGroup({
                          group: choice,
                          id: choice.id || null
                        });
                      } else {
                        var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                        var isSelected = shouldPreselect ? true : choice.selected;
                        var isDisabled = choice.disabled;
                        _this._addChoice({
                          value,
                          label,
                          isSelected: !!isSelected,
                          isDisabled: !!isDisabled,
                          placeholder: !!placeholder,
                          customProperties
                        });
                      }
                    } else {
                      _this._addChoice({
                        value,
                        label,
                        isSelected: !!choice.selected,
                        isDisabled: !!choice.disabled,
                        placeholder: !!choice.placeholder,
                        customProperties
                      });
                    }
                  });
                };
                Choices3.prototype._addPredefinedItems = function(items) {
                  var _this = this;
                  items.forEach(function(item) {
                    if (typeof item === "object" && item.value) {
                      _this._addItem({
                        value: item.value,
                        label: item.label,
                        choiceId: item.id,
                        customProperties: item.customProperties,
                        placeholder: item.placeholder
                      });
                    }
                    if (typeof item === "string") {
                      _this._addItem({
                        value: item
                      });
                    }
                  });
                };
                Choices3.prototype._setChoiceOrItem = function(item) {
                  var _this = this;
                  var itemType = (0, utils_1.getType)(item).toLowerCase();
                  var handleType = {
                    object: function() {
                      if (!item.value) {
                        return;
                      }
                      if (!_this._isTextElement) {
                        _this._addChoice({
                          value: item.value,
                          label: item.label,
                          isSelected: true,
                          isDisabled: false,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      } else {
                        _this._addItem({
                          value: item.value,
                          label: item.label,
                          choiceId: item.id,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      }
                    },
                    string: function() {
                      if (!_this._isTextElement) {
                        _this._addChoice({
                          value: item,
                          label: item,
                          isSelected: true,
                          isDisabled: false
                        });
                      } else {
                        _this._addItem({
                          value: item
                        });
                      }
                    }
                  };
                  handleType[itemType]();
                };
                Choices3.prototype._findAndSelectChoiceByValue = function(value) {
                  var _this = this;
                  var choices = this._store.choices;
                  var foundChoice = choices.find(function(choice) {
                    return _this.config.valueComparer(choice.value, value);
                  });
                  if (foundChoice && !foundChoice.selected) {
                    this._addItem({
                      value: foundChoice.value,
                      label: foundChoice.label,
                      choiceId: foundChoice.id,
                      groupId: foundChoice.groupId,
                      customProperties: foundChoice.customProperties,
                      placeholder: foundChoice.placeholder,
                      keyCode: foundChoice.keyCode
                    });
                  }
                };
                Choices3.prototype._generatePlaceholderValue = function() {
                  if (this._isSelectElement && this.passedElement.placeholderOption) {
                    var placeholderOption = this.passedElement.placeholderOption;
                    return placeholderOption ? placeholderOption.text : null;
                  }
                  var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                  var dataset = this.passedElement.element.dataset;
                  if (placeholder) {
                    if (placeholderValue) {
                      return placeholderValue;
                    }
                    if (dataset.placeholder) {
                      return dataset.placeholder;
                    }
                  }
                  return null;
                };
                return Choices3;
              }();
              exports2["default"] = Choices2;
            },
            613: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var constants_1 = __webpack_require__2(883);
              var Container = function() {
                function Container2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                  this.element = element;
                  this.classNames = classNames;
                  this.type = type;
                  this.position = position;
                  this.isOpen = false;
                  this.isFlipped = false;
                  this.isFocussed = false;
                  this.isDisabled = false;
                  this.isLoading = false;
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                Container2.prototype.addEventListeners = function() {
                  this.element.addEventListener("focus", this._onFocus);
                  this.element.addEventListener("blur", this._onBlur);
                };
                Container2.prototype.removeEventListeners = function() {
                  this.element.removeEventListener("focus", this._onFocus);
                  this.element.removeEventListener("blur", this._onBlur);
                };
                Container2.prototype.shouldFlip = function(dropdownPos) {
                  if (typeof dropdownPos !== "number") {
                    return false;
                  }
                  var shouldFlip = false;
                  if (this.position === "auto") {
                    shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
                  } else if (this.position === "top") {
                    shouldFlip = true;
                  }
                  return shouldFlip;
                };
                Container2.prototype.setActiveDescendant = function(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                Container2.prototype.removeActiveDescendant = function() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                Container2.prototype.open = function(dropdownPos) {
                  this.element.classList.add(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isOpen = true;
                  if (this.shouldFlip(dropdownPos)) {
                    this.element.classList.add(this.classNames.flippedState);
                    this.isFlipped = true;
                  }
                };
                Container2.prototype.close = function() {
                  this.element.classList.remove(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.removeActiveDescendant();
                  this.isOpen = false;
                  if (this.isFlipped) {
                    this.element.classList.remove(this.classNames.flippedState);
                    this.isFlipped = false;
                  }
                };
                Container2.prototype.focus = function() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                Container2.prototype.addFocusState = function() {
                  this.element.classList.add(this.classNames.focusState);
                };
                Container2.prototype.removeFocusState = function() {
                  this.element.classList.remove(this.classNames.focusState);
                };
                Container2.prototype.enable = function() {
                  this.element.classList.remove(this.classNames.disabledState);
                  this.element.removeAttribute("aria-disabled");
                  if (this.type === constants_1.SELECT_ONE_TYPE) {
                    this.element.setAttribute("tabindex", "0");
                  }
                  this.isDisabled = false;
                };
                Container2.prototype.disable = function() {
                  this.element.classList.add(this.classNames.disabledState);
                  this.element.setAttribute("aria-disabled", "true");
                  if (this.type === constants_1.SELECT_ONE_TYPE) {
                    this.element.setAttribute("tabindex", "-1");
                  }
                  this.isDisabled = true;
                };
                Container2.prototype.wrap = function(element) {
                  (0, utils_1.wrap)(element, this.element);
                };
                Container2.prototype.unwrap = function(element) {
                  if (this.element.parentNode) {
                    this.element.parentNode.insertBefore(element, this.element);
                    this.element.parentNode.removeChild(this.element);
                  }
                };
                Container2.prototype.addLoadingState = function() {
                  this.element.classList.add(this.classNames.loadingState);
                  this.element.setAttribute("aria-busy", "true");
                  this.isLoading = true;
                };
                Container2.prototype.removeLoadingState = function() {
                  this.element.classList.remove(this.classNames.loadingState);
                  this.element.removeAttribute("aria-busy");
                  this.isLoading = false;
                };
                Container2.prototype._onFocus = function() {
                  this.isFocussed = true;
                };
                Container2.prototype._onBlur = function() {
                  this.isFocussed = false;
                };
                return Container2;
              }();
              exports2["default"] = Container;
            },
            217: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var Dropdown = function() {
                function Dropdown2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames;
                  this.element = element;
                  this.classNames = classNames;
                  this.type = type;
                  this.isActive = false;
                }
                Object.defineProperty(Dropdown2.prototype, "distanceFromTopWindow", {
                  get: function() {
                    return this.element.getBoundingClientRect().bottom;
                  },
                  enumerable: false,
                  configurable: true
                });
                Dropdown2.prototype.getChild = function(selector) {
                  return this.element.querySelector(selector);
                };
                Dropdown2.prototype.show = function() {
                  this.element.classList.add(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isActive = true;
                  return this;
                };
                Dropdown2.prototype.hide = function() {
                  this.element.classList.remove(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.isActive = false;
                  return this;
                };
                return Dropdown2;
              }();
              exports2["default"] = Dropdown;
            },
            520: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.WrappedSelect = exports2.WrappedInput = exports2.List = exports2.Input = exports2.Container = exports2.Dropdown = void 0;
              var dropdown_1 = __importDefault(__webpack_require__2(217));
              exports2.Dropdown = dropdown_1.default;
              var container_1 = __importDefault(__webpack_require__2(613));
              exports2.Container = container_1.default;
              var input_1 = __importDefault(__webpack_require__2(11));
              exports2.Input = input_1.default;
              var list_1 = __importDefault(__webpack_require__2(624));
              exports2.List = list_1.default;
              var wrapped_input_1 = __importDefault(__webpack_require__2(541));
              exports2.WrappedInput = wrapped_input_1.default;
              var wrapped_select_1 = __importDefault(__webpack_require__2(982));
              exports2.WrappedSelect = wrapped_select_1.default;
            },
            11: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var constants_1 = __webpack_require__2(883);
              var Input = function() {
                function Input2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                  this.element = element;
                  this.type = type;
                  this.classNames = classNames;
                  this.preventPaste = preventPaste;
                  this.isFocussed = this.element.isEqualNode(document.activeElement);
                  this.isDisabled = element.disabled;
                  this._onPaste = this._onPaste.bind(this);
                  this._onInput = this._onInput.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                Object.defineProperty(Input2.prototype, "placeholder", {
                  set: function(placeholder) {
                    this.element.placeholder = placeholder;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Input2.prototype, "value", {
                  get: function() {
                    return (0, utils_1.sanitise)(this.element.value);
                  },
                  set: function(value) {
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Input2.prototype, "rawValue", {
                  get: function() {
                    return this.element.value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Input2.prototype.addEventListeners = function() {
                  this.element.addEventListener("paste", this._onPaste);
                  this.element.addEventListener("input", this._onInput, {
                    passive: true
                  });
                  this.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                };
                Input2.prototype.removeEventListeners = function() {
                  this.element.removeEventListener("input", this._onInput);
                  this.element.removeEventListener("paste", this._onPaste);
                  this.element.removeEventListener("focus", this._onFocus);
                  this.element.removeEventListener("blur", this._onBlur);
                };
                Input2.prototype.enable = function() {
                  this.element.removeAttribute("disabled");
                  this.isDisabled = false;
                };
                Input2.prototype.disable = function() {
                  this.element.setAttribute("disabled", "");
                  this.isDisabled = true;
                };
                Input2.prototype.focus = function() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                Input2.prototype.blur = function() {
                  if (this.isFocussed) {
                    this.element.blur();
                  }
                };
                Input2.prototype.clear = function(setWidth) {
                  if (setWidth === void 0) {
                    setWidth = true;
                  }
                  if (this.element.value) {
                    this.element.value = "";
                  }
                  if (setWidth) {
                    this.setWidth();
                  }
                  return this;
                };
                Input2.prototype.setWidth = function() {
                  var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                  style.minWidth = "".concat(placeholder.length + 1, "ch");
                  style.width = "".concat(value.length + 1, "ch");
                };
                Input2.prototype.setActiveDescendant = function(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                Input2.prototype.removeActiveDescendant = function() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                Input2.prototype._onInput = function() {
                  if (this.type !== constants_1.SELECT_ONE_TYPE) {
                    this.setWidth();
                  }
                };
                Input2.prototype._onPaste = function(event) {
                  if (this.preventPaste) {
                    event.preventDefault();
                  }
                };
                Input2.prototype._onFocus = function() {
                  this.isFocussed = true;
                };
                Input2.prototype._onBlur = function() {
                  this.isFocussed = false;
                };
                return Input2;
              }();
              exports2["default"] = Input;
            },
            624: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var constants_1 = __webpack_require__2(883);
              var List = function() {
                function List2(_a) {
                  var element = _a.element;
                  this.element = element;
                  this.scrollPos = this.element.scrollTop;
                  this.height = this.element.offsetHeight;
                }
                List2.prototype.clear = function() {
                  this.element.innerHTML = "";
                };
                List2.prototype.append = function(node) {
                  this.element.appendChild(node);
                };
                List2.prototype.getChild = function(selector) {
                  return this.element.querySelector(selector);
                };
                List2.prototype.hasChildren = function() {
                  return this.element.hasChildNodes();
                };
                List2.prototype.scrollToTop = function() {
                  this.element.scrollTop = 0;
                };
                List2.prototype.scrollToChildElement = function(element, direction) {
                  var _this = this;
                  if (!element) {
                    return;
                  }
                  var listHeight = this.element.offsetHeight;
                  var listScrollPosition = this.element.scrollTop + listHeight;
                  var elementHeight = element.offsetHeight;
                  var elementPos = element.offsetTop + elementHeight;
                  var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                  requestAnimationFrame(function() {
                    _this._animateScroll(destination, direction);
                  });
                };
                List2.prototype._scrollDown = function(scrollPos, strength, destination) {
                  var easing = (destination - scrollPos) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos + distance;
                };
                List2.prototype._scrollUp = function(scrollPos, strength, destination) {
                  var easing = (scrollPos - destination) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos - distance;
                };
                List2.prototype._animateScroll = function(destination, direction) {
                  var _this = this;
                  var strength = constants_1.SCROLLING_SPEED;
                  var choiceListScrollTop = this.element.scrollTop;
                  var continueAnimation = false;
                  if (direction > 0) {
                    this._scrollDown(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop < destination) {
                      continueAnimation = true;
                    }
                  } else {
                    this._scrollUp(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop > destination) {
                      continueAnimation = true;
                    }
                  }
                  if (continueAnimation) {
                    requestAnimationFrame(function() {
                      _this._animateScroll(destination, direction);
                    });
                  }
                };
                return List2;
              }();
              exports2["default"] = List;
            },
            730: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var WrappedElement = function() {
                function WrappedElement2(_a) {
                  var element = _a.element, classNames = _a.classNames;
                  this.element = element;
                  this.classNames = classNames;
                  if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                    throw new TypeError("Invalid element passed");
                  }
                  this.isDisabled = false;
                }
                Object.defineProperty(WrappedElement2.prototype, "isActive", {
                  get: function() {
                    return this.element.dataset.choice === "active";
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedElement2.prototype, "dir", {
                  get: function() {
                    return this.element.dir;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedElement2.prototype, "value", {
                  get: function() {
                    return this.element.value;
                  },
                  set: function(value) {
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                WrappedElement2.prototype.conceal = function() {
                  this.element.classList.add(this.classNames.input);
                  this.element.hidden = true;
                  this.element.tabIndex = -1;
                  var origStyle = this.element.getAttribute("style");
                  if (origStyle) {
                    this.element.setAttribute("data-choice-orig-style", origStyle);
                  }
                  this.element.setAttribute("data-choice", "active");
                };
                WrappedElement2.prototype.reveal = function() {
                  this.element.classList.remove(this.classNames.input);
                  this.element.hidden = false;
                  this.element.removeAttribute("tabindex");
                  var origStyle = this.element.getAttribute("data-choice-orig-style");
                  if (origStyle) {
                    this.element.removeAttribute("data-choice-orig-style");
                    this.element.setAttribute("style", origStyle);
                  } else {
                    this.element.removeAttribute("style");
                  }
                  this.element.removeAttribute("data-choice");
                  this.element.value = this.element.value;
                };
                WrappedElement2.prototype.enable = function() {
                  this.element.removeAttribute("disabled");
                  this.element.disabled = false;
                  this.isDisabled = false;
                };
                WrappedElement2.prototype.disable = function() {
                  this.element.setAttribute("disabled", "");
                  this.element.disabled = true;
                  this.isDisabled = true;
                };
                WrappedElement2.prototype.triggerEvent = function(eventType, data2) {
                  (0, utils_1.dispatchEvent)(this.element, eventType, data2);
                };
                return WrappedElement2;
              }();
              exports2["default"] = WrappedElement;
            },
            541: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (Object.prototype.hasOwnProperty.call(b2, p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var wrapped_element_1 = __importDefault(__webpack_require__2(730));
              var WrappedInput = function(_super) {
                __extends(WrappedInput2, _super);
                function WrappedInput2(_a) {
                  var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                  var _this = _super.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.delimiter = delimiter;
                  return _this;
                }
                Object.defineProperty(WrappedInput2.prototype, "value", {
                  get: function() {
                    return this.element.value;
                  },
                  set: function(value) {
                    this.element.setAttribute("value", value);
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                return WrappedInput2;
              }(wrapped_element_1.default);
              exports2["default"] = WrappedInput;
            },
            982: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (Object.prototype.hasOwnProperty.call(b2, p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var wrapped_element_1 = __importDefault(__webpack_require__2(730));
              var WrappedSelect = function(_super) {
                __extends(WrappedSelect2, _super);
                function WrappedSelect2(_a) {
                  var element = _a.element, classNames = _a.classNames, template = _a.template;
                  var _this = _super.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.template = template;
                  return _this;
                }
                Object.defineProperty(WrappedSelect2.prototype, "placeholderOption", {
                  get: function() {
                    return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedSelect2.prototype, "optionGroups", {
                  get: function() {
                    return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedSelect2.prototype, "options", {
                  get: function() {
                    return Array.from(this.element.options);
                  },
                  set: function(options) {
                    var _this = this;
                    var fragment = document.createDocumentFragment();
                    var addOptionToFragment = function(data2) {
                      var option = _this.template(data2);
                      fragment.appendChild(option);
                    };
                    options.forEach(function(optionData) {
                      return addOptionToFragment(optionData);
                    });
                    this.appendDocFragment(fragment);
                  },
                  enumerable: false,
                  configurable: true
                });
                WrappedSelect2.prototype.appendDocFragment = function(fragment) {
                  this.element.innerHTML = "";
                  this.element.appendChild(fragment);
                };
                return WrappedSelect2;
              }(wrapped_element_1.default);
              exports2["default"] = WrappedSelect;
            },
            883: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SCROLLING_SPEED = exports2.SELECT_MULTIPLE_TYPE = exports2.SELECT_ONE_TYPE = exports2.TEXT_TYPE = exports2.KEY_CODES = exports2.ACTION_TYPES = exports2.EVENTS = void 0;
              exports2.EVENTS = {
                showDropdown: "showDropdown",
                hideDropdown: "hideDropdown",
                change: "change",
                choice: "choice",
                search: "search",
                addItem: "addItem",
                removeItem: "removeItem",
                highlightItem: "highlightItem",
                highlightChoice: "highlightChoice",
                unhighlightItem: "unhighlightItem"
              };
              exports2.ACTION_TYPES = {
                ADD_CHOICE: "ADD_CHOICE",
                FILTER_CHOICES: "FILTER_CHOICES",
                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                CLEAR_CHOICES: "CLEAR_CHOICES",
                ADD_GROUP: "ADD_GROUP",
                ADD_ITEM: "ADD_ITEM",
                REMOVE_ITEM: "REMOVE_ITEM",
                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                CLEAR_ALL: "CLEAR_ALL",
                RESET_TO: "RESET_TO",
                SET_IS_LOADING: "SET_IS_LOADING"
              };
              exports2.KEY_CODES = {
                BACK_KEY: 46,
                DELETE_KEY: 8,
                ENTER_KEY: 13,
                A_KEY: 65,
                ESC_KEY: 27,
                UP_KEY: 38,
                DOWN_KEY: 40,
                PAGE_UP_KEY: 33,
                PAGE_DOWN_KEY: 34
              };
              exports2.TEXT_TYPE = "text";
              exports2.SELECT_ONE_TYPE = "select-one";
              exports2.SELECT_MULTIPLE_TYPE = "select-multiple";
              exports2.SCROLLING_SPEED = 4;
            },
            789: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DEFAULT_CONFIG = exports2.DEFAULT_CLASSNAMES = void 0;
              var utils_1 = __webpack_require__2(799);
              exports2.DEFAULT_CLASSNAMES = {
                containerOuter: "choices",
                containerInner: "choices__inner",
                input: "choices__input",
                inputCloned: "choices__input--cloned",
                list: "choices__list",
                listItems: "choices__list--multiple",
                listSingle: "choices__list--single",
                listDropdown: "choices__list--dropdown",
                item: "choices__item",
                itemSelectable: "choices__item--selectable",
                itemDisabled: "choices__item--disabled",
                itemChoice: "choices__item--choice",
                placeholder: "choices__placeholder",
                group: "choices__group",
                groupHeading: "choices__heading",
                button: "choices__button",
                activeState: "is-active",
                focusState: "is-focused",
                openState: "is-open",
                disabledState: "is-disabled",
                highlightedState: "is-highlighted",
                selectedState: "is-selected",
                flippedState: "is-flipped",
                loadingState: "is-loading",
                noResults: "has-no-results",
                noChoices: "has-no-choices"
              };
              exports2.DEFAULT_CONFIG = {
                items: [],
                choices: [],
                silent: false,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: true,
                addItemFilter: null,
                removeItems: true,
                removeItemButton: false,
                editItems: false,
                allowHTML: true,
                duplicateItemsAllowed: true,
                delimiter: ",",
                paste: true,
                searchEnabled: true,
                searchChoices: true,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: true,
                shouldSort: true,
                shouldSortItems: false,
                sorter: utils_1.sortByAlpha,
                placeholder: true,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText: "Only values matching specific conditions can be added",
                addItemText: function(value) {
                  return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                },
                maxItemText: function(maxItemCount) {
                  return "Only ".concat(maxItemCount, " values can be added");
                },
                valueComparer: function(value1, value2) {
                  return value1 === value2;
                },
                fuseOptions: {
                  includeScore: true
                },
                labelId: "",
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: exports2.DEFAULT_CLASSNAMES
              };
            },
            18: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            978: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            948: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            359: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            285: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            533: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            187: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0)
                  k2 = k;
                Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function() {
                    return m[k];
                  }
                });
              } : function(o, m, k, k2) {
                if (k2 === void 0)
                  k2 = k;
                o[k2] = m[k];
              });
              var __exportStar = this && this.__exportStar || function(m, exports3) {
                for (var p in m)
                  if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
                    __createBinding(exports3, m, p);
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              __exportStar(__webpack_require__2(18), exports2);
              __exportStar(__webpack_require__2(978), exports2);
              __exportStar(__webpack_require__2(948), exports2);
              __exportStar(__webpack_require__2(359), exports2);
              __exportStar(__webpack_require__2(285), exports2);
              __exportStar(__webpack_require__2(533), exports2);
              __exportStar(__webpack_require__2(287), exports2);
              __exportStar(__webpack_require__2(132), exports2);
              __exportStar(__webpack_require__2(837), exports2);
              __exportStar(__webpack_require__2(598), exports2);
              __exportStar(__webpack_require__2(369), exports2);
              __exportStar(__webpack_require__2(37), exports2);
              __exportStar(__webpack_require__2(47), exports2);
              __exportStar(__webpack_require__2(923), exports2);
              __exportStar(__webpack_require__2(876), exports2);
            },
            287: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            132: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            837: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            598: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            37: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            369: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            47: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            923: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            876: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            799: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.diff = exports2.cloneObject = exports2.existsInArray = exports2.dispatchEvent = exports2.sortByScore = exports2.sortByAlpha = exports2.strToEl = exports2.sanitise = exports2.isScrolledIntoView = exports2.getAdjacentEl = exports2.wrap = exports2.isType = exports2.getType = exports2.generateId = exports2.generateChars = exports2.getRandomNumber = void 0;
              var getRandomNumber = function(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
              };
              exports2.getRandomNumber = getRandomNumber;
              var generateChars = function(length) {
                return Array.from({
                  length
                }, function() {
                  return (0, exports2.getRandomNumber)(0, 36).toString(36);
                }).join("");
              };
              exports2.generateChars = generateChars;
              var generateId = function(element, prefix2) {
                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports2.generateChars)(2)) || (0, exports2.generateChars)(4);
                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                id = "".concat(prefix2, "-").concat(id);
                return id;
              };
              exports2.generateId = generateId;
              var getType = function(obj) {
                return Object.prototype.toString.call(obj).slice(8, -1);
              };
              exports2.getType = getType;
              var isType = function(type, obj) {
                return obj !== void 0 && obj !== null && (0, exports2.getType)(obj) === type;
              };
              exports2.isType = isType;
              var wrap = function(element, wrapper) {
                if (wrapper === void 0) {
                  wrapper = document.createElement("div");
                }
                if (element.parentNode) {
                  if (element.nextSibling) {
                    element.parentNode.insertBefore(wrapper, element.nextSibling);
                  } else {
                    element.parentNode.appendChild(wrapper);
                  }
                }
                return wrapper.appendChild(element);
              };
              exports2.wrap = wrap;
              var getAdjacentEl = function(startEl, selector, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                var sibling = startEl[prop];
                while (sibling) {
                  if (sibling.matches(selector)) {
                    return sibling;
                  }
                  sibling = sibling[prop];
                }
                return sibling;
              };
              exports2.getAdjacentEl = getAdjacentEl;
              var isScrolledIntoView = function(element, parent, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                if (!element) {
                  return false;
                }
                var isVisible;
                if (direction > 0) {
                  isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                } else {
                  isVisible = element.offsetTop >= parent.scrollTop;
                }
                return isVisible;
              };
              exports2.isScrolledIntoView = isScrolledIntoView;
              var sanitise = function(value) {
                if (typeof value !== "string") {
                  return value;
                }
                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
              };
              exports2.sanitise = sanitise;
              exports2.strToEl = function() {
                var tmpEl = document.createElement("div");
                return function(str) {
                  var cleanedInput = str.trim();
                  tmpEl.innerHTML = cleanedInput;
                  var firldChild = tmpEl.children[0];
                  while (tmpEl.firstChild) {
                    tmpEl.removeChild(tmpEl.firstChild);
                  }
                  return firldChild;
                };
              }();
              var sortByAlpha = function(_a, _b) {
                var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                return label.localeCompare(label2, [], {
                  sensitivity: "base",
                  ignorePunctuation: true,
                  numeric: true
                });
              };
              exports2.sortByAlpha = sortByAlpha;
              var sortByScore = function(a, b) {
                var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                return scoreA - scoreB;
              };
              exports2.sortByScore = sortByScore;
              var dispatchEvent = function(element, type, customArgs) {
                if (customArgs === void 0) {
                  customArgs = null;
                }
                var event = new CustomEvent(type, {
                  detail: customArgs,
                  bubbles: true,
                  cancelable: true
                });
                return element.dispatchEvent(event);
              };
              exports2.dispatchEvent = dispatchEvent;
              var existsInArray = function(array, value, key) {
                if (key === void 0) {
                  key = "value";
                }
                return array.some(function(item) {
                  if (typeof value === "string") {
                    return item[key] === value.trim();
                  }
                  return item[key] === value;
                });
              };
              exports2.existsInArray = existsInArray;
              var cloneObject = function(obj) {
                return JSON.parse(JSON.stringify(obj));
              };
              exports2.cloneObject = cloneObject;
              var diff = function(a, b) {
                var aKeys = Object.keys(a).sort();
                var bKeys = Object.keys(b).sort();
                return aKeys.filter(function(i) {
                  return bKeys.indexOf(i) < 0;
                });
              };
              exports2.diff = diff;
            },
            273: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function choices(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_CHOICE": {
                    var addChoiceAction = action;
                    var choice = {
                      id: addChoiceAction.id,
                      elementId: addChoiceAction.elementId,
                      groupId: addChoiceAction.groupId,
                      value: addChoiceAction.value,
                      label: addChoiceAction.label || addChoiceAction.value,
                      disabled: addChoiceAction.disabled || false,
                      selected: false,
                      active: true,
                      score: 9999,
                      customProperties: addChoiceAction.customProperties,
                      placeholder: addChoiceAction.placeholder || false
                    };
                    return __spreadArray(__spreadArray([], state, true), [choice], false);
                  }
                  case "ADD_ITEM": {
                    var addItemAction_1 = action;
                    if (addItemAction_1.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice2 = obj;
                        if (choice2.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
                          choice2.selected = true;
                        }
                        return choice2;
                      });
                    }
                    return state;
                  }
                  case "REMOVE_ITEM": {
                    var removeItemAction_1 = action;
                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice2 = obj;
                        if (choice2.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
                          choice2.selected = false;
                        }
                        return choice2;
                      });
                    }
                    return state;
                  }
                  case "FILTER_CHOICES": {
                    var filterChoicesAction_1 = action;
                    return state.map(function(obj) {
                      var choice2 = obj;
                      choice2.active = filterChoicesAction_1.results.some(function(_a) {
                        var item = _a.item, score = _a.score;
                        if (item.id === choice2.id) {
                          choice2.score = score;
                          return true;
                        }
                        return false;
                      });
                      return choice2;
                    });
                  }
                  case "ACTIVATE_CHOICES": {
                    var activateChoicesAction_1 = action;
                    return state.map(function(obj) {
                      var choice2 = obj;
                      choice2.active = activateChoicesAction_1.active;
                      return choice2;
                    });
                  }
                  case "CLEAR_CHOICES": {
                    return exports2.defaultState;
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = choices;
            },
            871: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function groups(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_GROUP": {
                    var addGroupAction = action;
                    return __spreadArray(__spreadArray([], state, true), [{
                      id: addGroupAction.id,
                      value: addGroupAction.value,
                      active: addGroupAction.active,
                      disabled: addGroupAction.disabled
                    }], false);
                  }
                  case "CLEAR_CHOICES": {
                    return [];
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = groups;
            },
            655: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              var redux_1 = __webpack_require__2(857);
              var items_1 = __importDefault(__webpack_require__2(52));
              var groups_1 = __importDefault(__webpack_require__2(871));
              var choices_1 = __importDefault(__webpack_require__2(273));
              var loading_1 = __importDefault(__webpack_require__2(502));
              var utils_1 = __webpack_require__2(799);
              exports2.defaultState = {
                groups: [],
                items: [],
                choices: [],
                loading: false
              };
              var appReducer = (0, redux_1.combineReducers)({
                items: items_1.default,
                groups: groups_1.default,
                choices: choices_1.default,
                loading: loading_1.default
              });
              var rootReducer = function(passedState, action) {
                var state = passedState;
                if (action.type === "CLEAR_ALL") {
                  state = exports2.defaultState;
                } else if (action.type === "RESET_TO") {
                  return (0, utils_1.cloneObject)(action.state);
                }
                return appReducer(state, action);
              };
              exports2["default"] = rootReducer;
            },
            52: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function items(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_ITEM": {
                    var addItemAction = action;
                    var newState = __spreadArray(__spreadArray([], state, true), [{
                      id: addItemAction.id,
                      choiceId: addItemAction.choiceId,
                      groupId: addItemAction.groupId,
                      value: addItemAction.value,
                      label: addItemAction.label,
                      active: true,
                      highlighted: false,
                      customProperties: addItemAction.customProperties,
                      placeholder: addItemAction.placeholder || false,
                      keyCode: null
                    }], false);
                    return newState.map(function(obj) {
                      var item = obj;
                      item.highlighted = false;
                      return item;
                    });
                  }
                  case "REMOVE_ITEM": {
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === action.id) {
                        item.active = false;
                      }
                      return item;
                    });
                  }
                  case "HIGHLIGHT_ITEM": {
                    var highlightItemAction_1 = action;
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === highlightItemAction_1.id) {
                        item.highlighted = highlightItemAction_1.highlighted;
                      }
                      return item;
                    });
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = items;
            },
            502: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = false;
              var general = function(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "SET_IS_LOADING": {
                    return action.isLoading;
                  }
                  default: {
                    return state;
                  }
                }
              };
              exports2["default"] = general;
            },
            744: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var redux_1 = __webpack_require__2(857);
              var index_1 = __importDefault(__webpack_require__2(655));
              var Store = function() {
                function Store2() {
                  this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                }
                Store2.prototype.subscribe = function(onChange) {
                  this._store.subscribe(onChange);
                };
                Store2.prototype.dispatch = function(action) {
                  this._store.dispatch(action);
                };
                Object.defineProperty(Store2.prototype, "state", {
                  get: function() {
                    return this._store.getState();
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "items", {
                  get: function() {
                    return this.state.items;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeItems", {
                  get: function() {
                    return this.items.filter(function(item) {
                      return item.active === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "highlightedActiveItems", {
                  get: function() {
                    return this.items.filter(function(item) {
                      return item.active && item.highlighted;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "choices", {
                  get: function() {
                    return this.state.choices;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeChoices", {
                  get: function() {
                    return this.choices.filter(function(choice) {
                      return choice.active === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "selectableChoices", {
                  get: function() {
                    return this.choices.filter(function(choice) {
                      return choice.disabled !== true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "searchableChoices", {
                  get: function() {
                    return this.selectableChoices.filter(function(choice) {
                      return choice.placeholder !== true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "placeholderChoice", {
                  get: function() {
                    return __spreadArray([], this.choices, true).reverse().find(function(choice) {
                      return choice.placeholder === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "groups", {
                  get: function() {
                    return this.state.groups;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeGroups", {
                  get: function() {
                    var _a = this, groups = _a.groups, choices = _a.choices;
                    return groups.filter(function(group) {
                      var isActive = group.active === true && group.disabled === false;
                      var hasActiveOptions = choices.some(function(choice) {
                        return choice.active === true && choice.disabled === false;
                      });
                      return isActive && hasActiveOptions;
                    }, []);
                  },
                  enumerable: false,
                  configurable: true
                });
                Store2.prototype.isLoading = function() {
                  return this.state.loading;
                };
                Store2.prototype.getChoiceById = function(id) {
                  return this.activeChoices.find(function(choice) {
                    return choice.id === parseInt(id, 10);
                  });
                };
                Store2.prototype.getGroupById = function(id) {
                  return this.groups.find(function(group) {
                    return group.id === id;
                  });
                };
                return Store2;
              }();
              exports2["default"] = Store;
            },
            686: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var templates = {
                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                  var containerOuter = _a.classNames.containerOuter;
                  var div = Object.assign(document.createElement("div"), {
                    className: containerOuter
                  });
                  div.dataset.type = passedElementType;
                  if (dir) {
                    div.dir = dir;
                  }
                  if (isSelectOneElement) {
                    div.tabIndex = 0;
                  }
                  if (isSelectElement) {
                    div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                    if (searchEnabled) {
                      div.setAttribute("aria-autocomplete", "list");
                    }
                  }
                  div.setAttribute("aria-haspopup", "true");
                  div.setAttribute("aria-expanded", "false");
                  if (labelId) {
                    div.setAttribute("aria-labeledby", labelId);
                  }
                  return div;
                },
                containerInner: function(_a) {
                  var containerInner = _a.classNames.containerInner;
                  return Object.assign(document.createElement("div"), {
                    className: containerInner
                  });
                },
                itemList: function(_a, isSelectOneElement) {
                  var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                  return Object.assign(document.createElement("div"), {
                    className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                  });
                },
                placeholder: function(_a, value) {
                  var _b;
                  var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                  return Object.assign(document.createElement("div"), (_b = {
                    className: placeholder
                  }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                },
                item: function(_a, _b, removeItemButton) {
                  var _c, _d;
                  var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                  var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                  var div = Object.assign(document.createElement("div"), (_c = {
                    className: item
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                  Object.assign(div.dataset, {
                    item: "",
                    id,
                    value,
                    customProperties
                  });
                  if (active) {
                    div.setAttribute("aria-selected", "true");
                  }
                  if (disabled) {
                    div.setAttribute("aria-disabled", "true");
                  }
                  if (isPlaceholder) {
                    div.classList.add(placeholder);
                  }
                  div.classList.add(highlighted ? highlightedState : itemSelectable);
                  if (removeItemButton) {
                    if (disabled) {
                      div.classList.remove(itemSelectable);
                    }
                    div.dataset.deletable = "";
                    var REMOVE_ITEM_TEXT = "Remove item";
                    var removeButton = Object.assign(document.createElement("button"), (_d = {
                      type: "button",
                      className: button
                    }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                    removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                    removeButton.dataset.button = "";
                    div.appendChild(removeButton);
                  }
                  return div;
                },
                choiceList: function(_a, isSelectOneElement) {
                  var list = _a.classNames.list;
                  var div = Object.assign(document.createElement("div"), {
                    className: list
                  });
                  if (!isSelectOneElement) {
                    div.setAttribute("aria-multiselectable", "true");
                  }
                  div.setAttribute("role", "listbox");
                  return div;
                },
                choiceGroup: function(_a, _b) {
                  var _c;
                  var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                  var id = _b.id, value = _b.value, disabled = _b.disabled;
                  var div = Object.assign(document.createElement("div"), {
                    className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                  });
                  div.setAttribute("role", "group");
                  Object.assign(div.dataset, {
                    group: "",
                    id,
                    value
                  });
                  if (disabled) {
                    div.setAttribute("aria-disabled", "true");
                  }
                  div.appendChild(Object.assign(document.createElement("div"), (_c = {
                    className: groupHeading
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                  return div;
                },
                choice: function(_a, _b, selectText) {
                  var _c;
                  var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                  var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                  var div = Object.assign(document.createElement("div"), (_c = {
                    id: elementId
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
                  if (isSelected) {
                    div.classList.add(selectedState);
                  }
                  if (isPlaceholder) {
                    div.classList.add(placeholder);
                  }
                  div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                  Object.assign(div.dataset, {
                    choice: "",
                    id,
                    value,
                    selectText
                  });
                  if (isDisabled) {
                    div.classList.add(itemDisabled);
                    div.dataset.choiceDisabled = "";
                    div.setAttribute("aria-disabled", "true");
                  } else {
                    div.classList.add(itemSelectable);
                    div.dataset.choiceSelectable = "";
                  }
                  return div;
                },
                input: function(_a, placeholderValue) {
                  var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                  var inp = Object.assign(document.createElement("input"), {
                    type: "search",
                    name: "search_terms",
                    className: "".concat(input, " ").concat(inputCloned),
                    autocomplete: "off",
                    autocapitalize: "off",
                    spellcheck: false
                  });
                  inp.setAttribute("role", "textbox");
                  inp.setAttribute("aria-autocomplete", "list");
                  inp.setAttribute("aria-label", placeholderValue);
                  return inp;
                },
                dropdown: function(_a) {
                  var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                  var div = document.createElement("div");
                  div.classList.add(list, listDropdown);
                  div.setAttribute("aria-expanded", "false");
                  return div;
                },
                notice: function(_a, innerText, type) {
                  var _b;
                  var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                  if (type === void 0) {
                    type = "";
                  }
                  var classes = [item, itemChoice];
                  if (type === "no-choices") {
                    classes.push(noChoices);
                  } else if (type === "no-results") {
                    classes.push(noResults);
                  }
                  return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, _b.className = classes.join(" "), _b));
                },
                option: function(_a) {
                  var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                  var opt = new Option(label, value, false, active);
                  if (customProperties) {
                    opt.dataset.customProperties = "".concat(customProperties);
                  }
                  opt.disabled = !!disabled;
                  return opt;
                }
              };
              exports2["default"] = templates;
            },
            996: function(module2) {
              var isMergeableObject = function isMergeableObject2(value) {
                return isNonNullObject(value) && !isSpecial(value);
              };
              function isNonNullObject(value) {
                return !!value && typeof value === "object";
              }
              function isSpecial(value) {
                var stringValue = Object.prototype.toString.call(value);
                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
              }
              var canUseSymbol = typeof Symbol === "function" && Symbol.for;
              var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
              function isReactElement(value) {
                return value.$$typeof === REACT_ELEMENT_TYPE;
              }
              function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
              }
              function cloneUnlessOtherwiseSpecified(value, options) {
                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
              }
              function defaultArrayMerge(target, source, options) {
                return target.concat(source).map(function(element) {
                  return cloneUnlessOtherwiseSpecified(element, options);
                });
              }
              function getMergeFunction(key, options) {
                if (!options.customMerge) {
                  return deepmerge;
                }
                var customMerge = options.customMerge(key);
                return typeof customMerge === "function" ? customMerge : deepmerge;
              }
              function getEnumerableOwnPropertySymbols(target) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                  return target.propertyIsEnumerable(symbol);
                }) : [];
              }
              function getKeys(target) {
                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
              }
              function propertyIsOnObject(object, property) {
                try {
                  return property in object;
                } catch (_) {
                  return false;
                }
              }
              function propertyIsUnsafe(target, key) {
                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
              }
              function mergeObject(target, source, options) {
                var destination = {};
                if (options.isMergeableObject(target)) {
                  getKeys(target).forEach(function(key) {
                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                  });
                }
                getKeys(source).forEach(function(key) {
                  if (propertyIsUnsafe(target, key)) {
                    return;
                  }
                  if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                    destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                  } else {
                    destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                  }
                });
                return destination;
              }
              function deepmerge(target, source, options) {
                options = options || {};
                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var sourceIsArray = Array.isArray(source);
                var targetIsArray = Array.isArray(target);
                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                if (!sourceAndTargetTypesMatch) {
                  return cloneUnlessOtherwiseSpecified(source, options);
                } else if (sourceIsArray) {
                  return options.arrayMerge(target, source, options);
                } else {
                  return mergeObject(target, source, options);
                }
              }
              deepmerge.all = function deepmergeAll(array, options) {
                if (!Array.isArray(array)) {
                  throw new Error("first argument should be an array");
                }
                return array.reduce(function(prev, next) {
                  return deepmerge(prev, next, options);
                }, {});
              };
              var deepmerge_1 = deepmerge;
              module2.exports = deepmerge_1;
            },
            221: function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                "default": function() {
                  return Fuse;
                }
              });
              function isArray3(value) {
                return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
              }
              const INFINITY = 1 / 0;
              function baseToString(value) {
                if (typeof value == "string") {
                  return value;
                }
                let result = value + "";
                return result == "0" && 1 / value == -INFINITY ? "-0" : result;
              }
              function toString(value) {
                return value == null ? "" : baseToString(value);
              }
              function isString3(value) {
                return typeof value === "string";
              }
              function isNumber(value) {
                return typeof value === "number";
              }
              function isBoolean(value) {
                return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
              }
              function isObject3(value) {
                return typeof value === "object";
              }
              function isObjectLike(value) {
                return isObject3(value) && value !== null;
              }
              function isDefined(value) {
                return value !== void 0 && value !== null;
              }
              function isBlank(value) {
                return !value.trim().length;
              }
              function getTag(value) {
                return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
              }
              const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
              const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
              const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
              const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
              const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
              const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
              const hasOwn2 = Object.prototype.hasOwnProperty;
              class KeyStore {
                constructor(keys) {
                  this._keys = [];
                  this._keyMap = {};
                  let totalWeight = 0;
                  keys.forEach((key) => {
                    let obj = createKey(key);
                    totalWeight += obj.weight;
                    this._keys.push(obj);
                    this._keyMap[obj.id] = obj;
                    totalWeight += obj.weight;
                  });
                  this._keys.forEach((key) => {
                    key.weight /= totalWeight;
                  });
                }
                get(keyId) {
                  return this._keyMap[keyId];
                }
                keys() {
                  return this._keys;
                }
                toJSON() {
                  return JSON.stringify(this._keys);
                }
              }
              function createKey(key) {
                let path = null;
                let id = null;
                let src = null;
                let weight = 1;
                if (isString3(key) || isArray3(key)) {
                  src = key;
                  path = createKeyPath(key);
                  id = createKeyId(key);
                } else {
                  if (!hasOwn2.call(key, "name")) {
                    throw new Error(MISSING_KEY_PROPERTY("name"));
                  }
                  const name = key.name;
                  src = name;
                  if (hasOwn2.call(key, "weight")) {
                    weight = key.weight;
                    if (weight <= 0) {
                      throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                    }
                  }
                  path = createKeyPath(name);
                  id = createKeyId(name);
                }
                return { path, id, weight, src };
              }
              function createKeyPath(key) {
                return isArray3(key) ? key : key.split(".");
              }
              function createKeyId(key) {
                return isArray3(key) ? key.join(".") : key;
              }
              function get3(obj, path) {
                let list = [];
                let arr = false;
                const deepGet = (obj2, path2, index) => {
                  if (!isDefined(obj2)) {
                    return;
                  }
                  if (!path2[index]) {
                    list.push(obj2);
                  } else {
                    let key = path2[index];
                    const value = obj2[key];
                    if (!isDefined(value)) {
                      return;
                    }
                    if (index === path2.length - 1 && (isString3(value) || isNumber(value) || isBoolean(value))) {
                      list.push(toString(value));
                    } else if (isArray3(value)) {
                      arr = true;
                      for (let i = 0, len = value.length; i < len; i += 1) {
                        deepGet(value[i], path2, index + 1);
                      }
                    } else if (path2.length) {
                      deepGet(value, path2, index + 1);
                    }
                  }
                };
                deepGet(obj, isString3(path) ? path.split(".") : path, 0);
                return arr ? list : list[0];
              }
              const MatchOptions = {
                includeMatches: false,
                findAllMatches: false,
                minMatchCharLength: 1
              };
              const BasicOptions = {
                isCaseSensitive: false,
                includeScore: false,
                keys: [],
                shouldSort: true,
                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
              };
              const FuzzyOptions = {
                location: 0,
                threshold: 0.6,
                distance: 100
              };
              const AdvancedOptions = {
                useExtendedSearch: false,
                getFn: get3,
                ignoreLocation: false,
                ignoreFieldNorm: false,
                fieldNormWeight: 1
              };
              var Config = {
                ...BasicOptions,
                ...MatchOptions,
                ...FuzzyOptions,
                ...AdvancedOptions
              };
              const SPACE = /[^ ]+/g;
              function norm(weight = 1, mantissa = 3) {
                const cache = new Map();
                const m = Math.pow(10, mantissa);
                return {
                  get(value) {
                    const numTokens = value.match(SPACE).length;
                    if (cache.has(numTokens)) {
                      return cache.get(numTokens);
                    }
                    const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
                    const n = parseFloat(Math.round(norm2 * m) / m);
                    cache.set(numTokens, n);
                    return n;
                  },
                  clear() {
                    cache.clear();
                  }
                };
              }
              class FuseIndex {
                constructor({
                  getFn = Config.getFn,
                  fieldNormWeight = Config.fieldNormWeight
                } = {}) {
                  this.norm = norm(fieldNormWeight, 3);
                  this.getFn = getFn;
                  this.isCreated = false;
                  this.setIndexRecords();
                }
                setSources(docs = []) {
                  this.docs = docs;
                }
                setIndexRecords(records = []) {
                  this.records = records;
                }
                setKeys(keys = []) {
                  this.keys = keys;
                  this._keysMap = {};
                  keys.forEach((key, idx) => {
                    this._keysMap[key.id] = idx;
                  });
                }
                create() {
                  if (this.isCreated || !this.docs.length) {
                    return;
                  }
                  this.isCreated = true;
                  if (isString3(this.docs[0])) {
                    this.docs.forEach((doc, docIndex) => {
                      this._addString(doc, docIndex);
                    });
                  } else {
                    this.docs.forEach((doc, docIndex) => {
                      this._addObject(doc, docIndex);
                    });
                  }
                  this.norm.clear();
                }
                add(doc) {
                  const idx = this.size();
                  if (isString3(doc)) {
                    this._addString(doc, idx);
                  } else {
                    this._addObject(doc, idx);
                  }
                }
                removeAt(idx) {
                  this.records.splice(idx, 1);
                  for (let i = idx, len = this.size(); i < len; i += 1) {
                    this.records[i].i -= 1;
                  }
                }
                getValueForItemAtKeyId(item, keyId) {
                  return item[this._keysMap[keyId]];
                }
                size() {
                  return this.records.length;
                }
                _addString(doc, docIndex) {
                  if (!isDefined(doc) || isBlank(doc)) {
                    return;
                  }
                  let record = {
                    v: doc,
                    i: docIndex,
                    n: this.norm.get(doc)
                  };
                  this.records.push(record);
                }
                _addObject(doc, docIndex) {
                  let record = { i: docIndex, $: {} };
                  this.keys.forEach((key, keyIndex) => {
                    let value = this.getFn(doc, key.path);
                    if (!isDefined(value)) {
                      return;
                    }
                    if (isArray3(value)) {
                      let subRecords = [];
                      const stack = [{ nestedArrIndex: -1, value }];
                      while (stack.length) {
                        const { nestedArrIndex, value: value2 } = stack.pop();
                        if (!isDefined(value2)) {
                          continue;
                        }
                        if (isString3(value2) && !isBlank(value2)) {
                          let subRecord = {
                            v: value2,
                            i: nestedArrIndex,
                            n: this.norm.get(value2)
                          };
                          subRecords.push(subRecord);
                        } else if (isArray3(value2)) {
                          value2.forEach((item, k) => {
                            stack.push({
                              nestedArrIndex: k,
                              value: item
                            });
                          });
                        } else
                          ;
                      }
                      record.$[keyIndex] = subRecords;
                    } else if (!isBlank(value)) {
                      let subRecord = {
                        v: value,
                        n: this.norm.get(value)
                      };
                      record.$[keyIndex] = subRecord;
                    }
                  });
                  this.records.push(record);
                }
                toJSON() {
                  return {
                    keys: this.keys,
                    records: this.records
                  };
                }
              }
              function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                myIndex.setKeys(keys.map(createKey));
                myIndex.setSources(docs);
                myIndex.create();
                return myIndex;
              }
              function parseIndex(data2, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                const { keys, records } = data2;
                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                myIndex.setKeys(keys);
                myIndex.setIndexRecords(records);
                return myIndex;
              }
              function computeScore$1(pattern, {
                errors = 0,
                currentLocation = 0,
                expectedLocation = 0,
                distance = Config.distance,
                ignoreLocation = Config.ignoreLocation
              } = {}) {
                const accuracy = errors / pattern.length;
                if (ignoreLocation) {
                  return accuracy;
                }
                const proximity = Math.abs(expectedLocation - currentLocation);
                if (!distance) {
                  return proximity ? 1 : accuracy;
                }
                return accuracy + proximity / distance;
              }
              function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                let indices = [];
                let start2 = -1;
                let end = -1;
                let i = 0;
                for (let len = matchmask.length; i < len; i += 1) {
                  let match = matchmask[i];
                  if (match && start2 === -1) {
                    start2 = i;
                  } else if (!match && start2 !== -1) {
                    end = i - 1;
                    if (end - start2 + 1 >= minMatchCharLength) {
                      indices.push([start2, end]);
                    }
                    start2 = -1;
                  }
                }
                if (matchmask[i - 1] && i - start2 >= minMatchCharLength) {
                  indices.push([start2, i - 1]);
                }
                return indices;
              }
              const MAX_BITS = 32;
              function search(text, pattern, patternAlphabet, {
                location = Config.location,
                distance = Config.distance,
                threshold = Config.threshold,
                findAllMatches = Config.findAllMatches,
                minMatchCharLength = Config.minMatchCharLength,
                includeMatches = Config.includeMatches,
                ignoreLocation = Config.ignoreLocation
              } = {}) {
                if (pattern.length > MAX_BITS) {
                  throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                }
                const patternLen = pattern.length;
                const textLen = text.length;
                const expectedLocation = Math.max(0, Math.min(location, textLen));
                let currentThreshold = threshold;
                let bestLocation = expectedLocation;
                const computeMatches = minMatchCharLength > 1 || includeMatches;
                const matchMask = computeMatches ? Array(textLen) : [];
                let index;
                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                  let score = computeScore$1(pattern, {
                    currentLocation: index,
                    expectedLocation,
                    distance,
                    ignoreLocation
                  });
                  currentThreshold = Math.min(score, currentThreshold);
                  bestLocation = index + patternLen;
                  if (computeMatches) {
                    let i = 0;
                    while (i < patternLen) {
                      matchMask[index + i] = 1;
                      i += 1;
                    }
                  }
                }
                bestLocation = -1;
                let lastBitArr = [];
                let finalScore = 1;
                let binMax = patternLen + textLen;
                const mask = 1 << patternLen - 1;
                for (let i = 0; i < patternLen; i += 1) {
                  let binMin = 0;
                  let binMid = binMax;
                  while (binMin < binMid) {
                    const score2 = computeScore$1(pattern, {
                      errors: i,
                      currentLocation: expectedLocation + binMid,
                      expectedLocation,
                      distance,
                      ignoreLocation
                    });
                    if (score2 <= currentThreshold) {
                      binMin = binMid;
                    } else {
                      binMax = binMid;
                    }
                    binMid = Math.floor((binMax - binMin) / 2 + binMin);
                  }
                  binMax = binMid;
                  let start2 = Math.max(1, expectedLocation - binMid + 1);
                  let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                  let bitArr = Array(finish + 2);
                  bitArr[finish + 1] = (1 << i) - 1;
                  for (let j = finish; j >= start2; j -= 1) {
                    let currentLocation = j - 1;
                    let charMatch = patternAlphabet[text.charAt(currentLocation)];
                    if (computeMatches) {
                      matchMask[currentLocation] = +!!charMatch;
                    }
                    bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                    if (i) {
                      bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                    }
                    if (bitArr[j] & mask) {
                      finalScore = computeScore$1(pattern, {
                        errors: i,
                        currentLocation,
                        expectedLocation,
                        distance,
                        ignoreLocation
                      });
                      if (finalScore <= currentThreshold) {
                        currentThreshold = finalScore;
                        bestLocation = currentLocation;
                        if (bestLocation <= expectedLocation) {
                          break;
                        }
                        start2 = Math.max(1, 2 * expectedLocation - bestLocation);
                      }
                    }
                  }
                  const score = computeScore$1(pattern, {
                    errors: i + 1,
                    currentLocation: expectedLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                  });
                  if (score > currentThreshold) {
                    break;
                  }
                  lastBitArr = bitArr;
                }
                const result = {
                  isMatch: bestLocation >= 0,
                  score: Math.max(1e-3, finalScore)
                };
                if (computeMatches) {
                  const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                  if (!indices.length) {
                    result.isMatch = false;
                  } else if (includeMatches) {
                    result.indices = indices;
                  }
                }
                return result;
              }
              function createPatternAlphabet(pattern) {
                let mask = {};
                for (let i = 0, len = pattern.length; i < len; i += 1) {
                  const char = pattern.charAt(i);
                  mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                }
                return mask;
              }
              class BitapSearch {
                constructor(pattern, {
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance,
                  includeMatches = Config.includeMatches,
                  findAllMatches = Config.findAllMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  isCaseSensitive = Config.isCaseSensitive,
                  ignoreLocation = Config.ignoreLocation
                } = {}) {
                  this.options = {
                    location,
                    threshold,
                    distance,
                    includeMatches,
                    findAllMatches,
                    minMatchCharLength,
                    isCaseSensitive,
                    ignoreLocation
                  };
                  this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                  this.chunks = [];
                  if (!this.pattern.length) {
                    return;
                  }
                  const addChunk = (pattern2, startIndex) => {
                    this.chunks.push({
                      pattern: pattern2,
                      alphabet: createPatternAlphabet(pattern2),
                      startIndex
                    });
                  };
                  const len = this.pattern.length;
                  if (len > MAX_BITS) {
                    let i = 0;
                    const remainder = len % MAX_BITS;
                    const end = len - remainder;
                    while (i < end) {
                      addChunk(this.pattern.substr(i, MAX_BITS), i);
                      i += MAX_BITS;
                    }
                    if (remainder) {
                      const startIndex = len - MAX_BITS;
                      addChunk(this.pattern.substr(startIndex), startIndex);
                    }
                  } else {
                    addChunk(this.pattern, 0);
                  }
                }
                searchIn(text) {
                  const { isCaseSensitive, includeMatches } = this.options;
                  if (!isCaseSensitive) {
                    text = text.toLowerCase();
                  }
                  if (this.pattern === text) {
                    let result2 = {
                      isMatch: true,
                      score: 0
                    };
                    if (includeMatches) {
                      result2.indices = [[0, text.length - 1]];
                    }
                    return result2;
                  }
                  const {
                    location,
                    distance,
                    threshold,
                    findAllMatches,
                    minMatchCharLength,
                    ignoreLocation
                  } = this.options;
                  let allIndices = [];
                  let totalScore = 0;
                  let hasMatches = false;
                  this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
                    const { isMatch, score, indices } = search(text, pattern, alphabet, {
                      location: location + startIndex,
                      distance,
                      threshold,
                      findAllMatches,
                      minMatchCharLength,
                      includeMatches,
                      ignoreLocation
                    });
                    if (isMatch) {
                      hasMatches = true;
                    }
                    totalScore += score;
                    if (isMatch && indices) {
                      allIndices = [...allIndices, ...indices];
                    }
                  });
                  let result = {
                    isMatch: hasMatches,
                    score: hasMatches ? totalScore / this.chunks.length : 1
                  };
                  if (hasMatches && includeMatches) {
                    result.indices = allIndices;
                  }
                  return result;
                }
              }
              class BaseMatch {
                constructor(pattern) {
                  this.pattern = pattern;
                }
                static isMultiMatch(pattern) {
                  return getMatch(pattern, this.multiRegex);
                }
                static isSingleMatch(pattern) {
                  return getMatch(pattern, this.singleRegex);
                }
                search() {
                }
              }
              function getMatch(pattern, exp) {
                const matches2 = pattern.match(exp);
                return matches2 ? matches2[1] : null;
              }
              class ExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "exact";
                }
                static get multiRegex() {
                  return /^="(.*)"$/;
                }
                static get singleRegex() {
                  return /^=(.*)$/;
                }
                search(text) {
                  const isMatch = text === this.pattern;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                  };
                }
              }
              class InverseExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-exact";
                }
                static get multiRegex() {
                  return /^!"(.*)"$/;
                }
                static get singleRegex() {
                  return /^!(.*)$/;
                }
                search(text) {
                  const index = text.indexOf(this.pattern);
                  const isMatch = index === -1;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class PrefixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "prefix-exact";
                }
                static get multiRegex() {
                  return /^\^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^\^(.*)$/;
                }
                search(text) {
                  const isMatch = text.startsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                  };
                }
              }
              class InversePrefixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-prefix-exact";
                }
                static get multiRegex() {
                  return /^!\^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^!\^(.*)$/;
                }
                search(text) {
                  const isMatch = !text.startsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class SuffixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "suffix-exact";
                }
                static get multiRegex() {
                  return /^"(.*)"\$$/;
                }
                static get singleRegex() {
                  return /^(.*)\$$/;
                }
                search(text) {
                  const isMatch = text.endsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [text.length - this.pattern.length, text.length - 1]
                  };
                }
              }
              class InverseSuffixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-suffix-exact";
                }
                static get multiRegex() {
                  return /^!"(.*)"\$$/;
                }
                static get singleRegex() {
                  return /^!(.*)\$$/;
                }
                search(text) {
                  const isMatch = !text.endsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class FuzzyMatch extends BaseMatch {
                constructor(pattern, {
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance,
                  includeMatches = Config.includeMatches,
                  findAllMatches = Config.findAllMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  isCaseSensitive = Config.isCaseSensitive,
                  ignoreLocation = Config.ignoreLocation
                } = {}) {
                  super(pattern);
                  this._bitapSearch = new BitapSearch(pattern, {
                    location,
                    threshold,
                    distance,
                    includeMatches,
                    findAllMatches,
                    minMatchCharLength,
                    isCaseSensitive,
                    ignoreLocation
                  });
                }
                static get type() {
                  return "fuzzy";
                }
                static get multiRegex() {
                  return /^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^(.*)$/;
                }
                search(text) {
                  return this._bitapSearch.searchIn(text);
                }
              }
              class IncludeMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "include";
                }
                static get multiRegex() {
                  return /^'"(.*)"$/;
                }
                static get singleRegex() {
                  return /^'(.*)$/;
                }
                search(text) {
                  let location = 0;
                  let index;
                  const indices = [];
                  const patternLen = this.pattern.length;
                  while ((index = text.indexOf(this.pattern, location)) > -1) {
                    location = index + patternLen;
                    indices.push([index, location - 1]);
                  }
                  const isMatch = !!indices.length;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices
                  };
                }
              }
              const searchers = [
                ExactMatch,
                IncludeMatch,
                PrefixExactMatch,
                InversePrefixExactMatch,
                InverseSuffixExactMatch,
                SuffixExactMatch,
                InverseExactMatch,
                FuzzyMatch
              ];
              const searchersLen = searchers.length;
              const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
              const OR_TOKEN = "|";
              function parseQuery(pattern, options = {}) {
                return pattern.split(OR_TOKEN).map((item) => {
                  let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
                  let results = [];
                  for (let i = 0, len = query.length; i < len; i += 1) {
                    const queryItem = query[i];
                    let found = false;
                    let idx = -1;
                    while (!found && ++idx < searchersLen) {
                      const searcher = searchers[idx];
                      let token = searcher.isMultiMatch(queryItem);
                      if (token) {
                        results.push(new searcher(token, options));
                        found = true;
                      }
                    }
                    if (found) {
                      continue;
                    }
                    idx = -1;
                    while (++idx < searchersLen) {
                      const searcher = searchers[idx];
                      let token = searcher.isSingleMatch(queryItem);
                      if (token) {
                        results.push(new searcher(token, options));
                        break;
                      }
                    }
                  }
                  return results;
                });
              }
              const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
              class ExtendedSearch {
                constructor(pattern, {
                  isCaseSensitive = Config.isCaseSensitive,
                  includeMatches = Config.includeMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  ignoreLocation = Config.ignoreLocation,
                  findAllMatches = Config.findAllMatches,
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance
                } = {}) {
                  this.query = null;
                  this.options = {
                    isCaseSensitive,
                    includeMatches,
                    minMatchCharLength,
                    findAllMatches,
                    ignoreLocation,
                    location,
                    threshold,
                    distance
                  };
                  this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                  this.query = parseQuery(this.pattern, this.options);
                }
                static condition(_, options) {
                  return options.useExtendedSearch;
                }
                searchIn(text) {
                  const query = this.query;
                  if (!query) {
                    return {
                      isMatch: false,
                      score: 1
                    };
                  }
                  const { includeMatches, isCaseSensitive } = this.options;
                  text = isCaseSensitive ? text : text.toLowerCase();
                  let numMatches = 0;
                  let allIndices = [];
                  let totalScore = 0;
                  for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                    const searchers2 = query[i];
                    allIndices.length = 0;
                    numMatches = 0;
                    for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
                      const searcher = searchers2[j];
                      const { isMatch, indices, score } = searcher.search(text);
                      if (isMatch) {
                        numMatches += 1;
                        totalScore += score;
                        if (includeMatches) {
                          const type = searcher.constructor.type;
                          if (MultiMatchSet.has(type)) {
                            allIndices = [...allIndices, ...indices];
                          } else {
                            allIndices.push(indices);
                          }
                        }
                      } else {
                        totalScore = 0;
                        numMatches = 0;
                        allIndices.length = 0;
                        break;
                      }
                    }
                    if (numMatches) {
                      let result = {
                        isMatch: true,
                        score: totalScore / numMatches
                      };
                      if (includeMatches) {
                        result.indices = allIndices;
                      }
                      return result;
                    }
                  }
                  return {
                    isMatch: false,
                    score: 1
                  };
                }
              }
              const registeredSearchers = [];
              function register(...args) {
                registeredSearchers.push(...args);
              }
              function createSearcher(pattern, options) {
                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                  let searcherClass = registeredSearchers[i];
                  if (searcherClass.condition(pattern, options)) {
                    return new searcherClass(pattern, options);
                  }
                }
                return new BitapSearch(pattern, options);
              }
              const LogicalOperator = {
                AND: "$and",
                OR: "$or"
              };
              const KeyType = {
                PATH: "$path",
                PATTERN: "$val"
              };
              const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
              const isPath = (query) => !!query[KeyType.PATH];
              const isLeaf = (query) => !isArray3(query) && isObject3(query) && !isExpression(query);
              const convertToExplicit = (query) => ({
                [LogicalOperator.AND]: Object.keys(query).map((key) => ({
                  [key]: query[key]
                }))
              });
              function parse(query, options, { auto = true } = {}) {
                const next = (query2) => {
                  let keys = Object.keys(query2);
                  const isQueryPath = isPath(query2);
                  if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
                    return next(convertToExplicit(query2));
                  }
                  if (isLeaf(query2)) {
                    const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
                    const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
                    if (!isString3(pattern)) {
                      throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                    }
                    const obj = {
                      keyId: createKeyId(key),
                      pattern
                    };
                    if (auto) {
                      obj.searcher = createSearcher(pattern, options);
                    }
                    return obj;
                  }
                  let node = {
                    children: [],
                    operator: keys[0]
                  };
                  keys.forEach((key) => {
                    const value = query2[key];
                    if (isArray3(value)) {
                      value.forEach((item) => {
                        node.children.push(next(item));
                      });
                    }
                  });
                  return node;
                };
                if (!isExpression(query)) {
                  query = convertToExplicit(query);
                }
                return next(query);
              }
              function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
                results.forEach((result) => {
                  let totalScore = 1;
                  result.matches.forEach(({ key, norm: norm2, score }) => {
                    const weight = key ? key.weight : null;
                    totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
                  });
                  result.score = totalScore;
                });
              }
              function transformMatches(result, data2) {
                const matches2 = result.matches;
                data2.matches = [];
                if (!isDefined(matches2)) {
                  return;
                }
                matches2.forEach((match) => {
                  if (!isDefined(match.indices) || !match.indices.length) {
                    return;
                  }
                  const { indices, value } = match;
                  let obj = {
                    indices,
                    value
                  };
                  if (match.key) {
                    obj.key = match.key.src;
                  }
                  if (match.idx > -1) {
                    obj.refIndex = match.idx;
                  }
                  data2.matches.push(obj);
                });
              }
              function transformScore(result, data2) {
                data2.score = result.score;
              }
              function format(results, docs, {
                includeMatches = Config.includeMatches,
                includeScore = Config.includeScore
              } = {}) {
                const transformers = [];
                if (includeMatches)
                  transformers.push(transformMatches);
                if (includeScore)
                  transformers.push(transformScore);
                return results.map((result) => {
                  const { idx } = result;
                  const data2 = {
                    item: docs[idx],
                    refIndex: idx
                  };
                  if (transformers.length) {
                    transformers.forEach((transformer) => {
                      transformer(result, data2);
                    });
                  }
                  return data2;
                });
              }
              class Fuse {
                constructor(docs, options = {}, index) {
                  this.options = { ...Config, ...options };
                  if (this.options.useExtendedSearch && false) {
                  }
                  this._keyStore = new KeyStore(this.options.keys);
                  this.setCollection(docs, index);
                }
                setCollection(docs, index) {
                  this._docs = docs;
                  if (index && !(index instanceof FuseIndex)) {
                    throw new Error(INCORRECT_INDEX_TYPE);
                  }
                  this._myIndex = index || createIndex(this.options.keys, this._docs, {
                    getFn: this.options.getFn,
                    fieldNormWeight: this.options.fieldNormWeight
                  });
                }
                add(doc) {
                  if (!isDefined(doc)) {
                    return;
                  }
                  this._docs.push(doc);
                  this._myIndex.add(doc);
                }
                remove(predicate = () => false) {
                  const results = [];
                  for (let i = 0, len = this._docs.length; i < len; i += 1) {
                    const doc = this._docs[i];
                    if (predicate(doc, i)) {
                      this.removeAt(i);
                      i -= 1;
                      len -= 1;
                      results.push(doc);
                    }
                  }
                  return results;
                }
                removeAt(idx) {
                  this._docs.splice(idx, 1);
                  this._myIndex.removeAt(idx);
                }
                getIndex() {
                  return this._myIndex;
                }
                search(query, { limit = -1 } = {}) {
                  const {
                    includeMatches,
                    includeScore,
                    shouldSort,
                    sortFn,
                    ignoreFieldNorm
                  } = this.options;
                  let results = isString3(query) ? isString3(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                  computeScore(results, { ignoreFieldNorm });
                  if (shouldSort) {
                    results.sort(sortFn);
                  }
                  if (isNumber(limit) && limit > -1) {
                    results = results.slice(0, limit);
                  }
                  return format(results, this._docs, {
                    includeMatches,
                    includeScore
                  });
                }
                _searchStringList(query) {
                  const searcher = createSearcher(query, this.options);
                  const { records } = this._myIndex;
                  const results = [];
                  records.forEach(({ v: text, i: idx, n: norm2 }) => {
                    if (!isDefined(text)) {
                      return;
                    }
                    const { isMatch, score, indices } = searcher.searchIn(text);
                    if (isMatch) {
                      results.push({
                        item: text,
                        idx,
                        matches: [{ score, value: text, norm: norm2, indices }]
                      });
                    }
                  });
                  return results;
                }
                _searchLogical(query) {
                  const expression = parse(query, this.options);
                  const evaluate2 = (node, item, idx) => {
                    if (!node.children) {
                      const { keyId, searcher } = node;
                      const matches2 = this._findMatches({
                        key: this._keyStore.get(keyId),
                        value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                        searcher
                      });
                      if (matches2 && matches2.length) {
                        return [
                          {
                            idx,
                            item,
                            matches: matches2
                          }
                        ];
                      }
                      return [];
                    }
                    const res = [];
                    for (let i = 0, len = node.children.length; i < len; i += 1) {
                      const child = node.children[i];
                      const result = evaluate2(child, item, idx);
                      if (result.length) {
                        res.push(...result);
                      } else if (node.operator === LogicalOperator.AND) {
                        return [];
                      }
                    }
                    return res;
                  };
                  const records = this._myIndex.records;
                  const resultMap = {};
                  const results = [];
                  records.forEach(({ $: item, i: idx }) => {
                    if (isDefined(item)) {
                      let expResults = evaluate2(expression, item, idx);
                      if (expResults.length) {
                        if (!resultMap[idx]) {
                          resultMap[idx] = { idx, item, matches: [] };
                          results.push(resultMap[idx]);
                        }
                        expResults.forEach(({ matches: matches2 }) => {
                          resultMap[idx].matches.push(...matches2);
                        });
                      }
                    }
                  });
                  return results;
                }
                _searchObjectList(query) {
                  const searcher = createSearcher(query, this.options);
                  const { keys, records } = this._myIndex;
                  const results = [];
                  records.forEach(({ $: item, i: idx }) => {
                    if (!isDefined(item)) {
                      return;
                    }
                    let matches2 = [];
                    keys.forEach((key, keyIndex) => {
                      matches2.push(...this._findMatches({
                        key,
                        value: item[keyIndex],
                        searcher
                      }));
                    });
                    if (matches2.length) {
                      results.push({
                        idx,
                        item,
                        matches: matches2
                      });
                    }
                  });
                  return results;
                }
                _findMatches({ key, value, searcher }) {
                  if (!isDefined(value)) {
                    return [];
                  }
                  let matches2 = [];
                  if (isArray3(value)) {
                    value.forEach(({ v: text, i: idx, n: norm2 }) => {
                      if (!isDefined(text)) {
                        return;
                      }
                      const { isMatch, score, indices } = searcher.searchIn(text);
                      if (isMatch) {
                        matches2.push({
                          score,
                          key,
                          value: text,
                          idx,
                          norm: norm2,
                          indices
                        });
                      }
                    });
                  } else {
                    const { v: text, n: norm2 } = value;
                    const { isMatch, score, indices } = searcher.searchIn(text);
                    if (isMatch) {
                      matches2.push({ score, key, value: text, norm: norm2, indices });
                    }
                  }
                  return matches2;
                }
              }
              Fuse.version = "6.5.3";
              Fuse.createIndex = createIndex;
              Fuse.parseIndex = parseIndex;
              Fuse.config = Config;
              {
                Fuse.parseQuery = parse;
              }
              {
                register(ExtendedSearch);
              }
            },
            857: function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                "__DO_NOT_USE__ActionTypes": function() {
                  return ActionTypes;
                },
                "applyMiddleware": function() {
                  return applyMiddleware;
                },
                "bindActionCreators": function() {
                  return bindActionCreators;
                },
                "combineReducers": function() {
                  return combineReducers;
                },
                "compose": function() {
                  return compose;
                },
                "createStore": function() {
                  return createStore;
                }
              });
              ;
              function _defineProperty2(obj, key, value) {
                if (key in obj) {
                  Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              ;
              function ownKeys3(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                  })), keys.push.apply(keys, symbols);
                }
                return keys;
              }
              function _objectSpread22(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i] != null ? arguments[i] : {};
                  i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
                    _defineProperty2(target, key, source[key]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                  });
                }
                return target;
              }
              ;
              function formatProdErrorMessage(code) {
                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
              }
              var $$observable = function() {
                return typeof Symbol === "function" && Symbol.observable || "@@observable";
              }();
              var randomString = function randomString2() {
                return Math.random().toString(36).substring(7).split("").join(".");
              };
              var ActionTypes = {
                INIT: "@@redux/INIT" + randomString(),
                REPLACE: "@@redux/REPLACE" + randomString(),
                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                }
              };
              function isPlainObject(obj) {
                if (typeof obj !== "object" || obj === null)
                  return false;
                var proto = obj;
                while (Object.getPrototypeOf(proto) !== null) {
                  proto = Object.getPrototypeOf(proto);
                }
                return Object.getPrototypeOf(obj) === proto;
              }
              function miniKindOf(val) {
                if (val === void 0)
                  return "undefined";
                if (val === null)
                  return "null";
                var type = typeof val;
                switch (type) {
                  case "boolean":
                  case "string":
                  case "number":
                  case "symbol":
                  case "function": {
                    return type;
                  }
                }
                if (Array.isArray(val))
                  return "array";
                if (isDate(val))
                  return "date";
                if (isError(val))
                  return "error";
                var constructorName = ctorName(val);
                switch (constructorName) {
                  case "Symbol":
                  case "Promise":
                  case "WeakMap":
                  case "WeakSet":
                  case "Map":
                  case "Set":
                    return constructorName;
                }
                return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
              }
              function ctorName(val) {
                return typeof val.constructor === "function" ? val.constructor.name : null;
              }
              function isError(val) {
                return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
              }
              function isDate(val) {
                if (val instanceof Date)
                  return true;
                return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
              }
              function kindOf(val) {
                var typeOfVal = typeof val;
                if (false) {
                }
                return typeOfVal;
              }
              function createStore(reducer, preloadedState, enhancer) {
                var _ref2;
                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
                  throw new Error(true ? formatProdErrorMessage(0) : 0);
                }
                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                  enhancer = preloadedState;
                  preloadedState = void 0;
                }
                if (typeof enhancer !== "undefined") {
                  if (typeof enhancer !== "function") {
                    throw new Error(true ? formatProdErrorMessage(1) : 0);
                  }
                  return enhancer(createStore)(reducer, preloadedState);
                }
                if (typeof reducer !== "function") {
                  throw new Error(true ? formatProdErrorMessage(2) : 0);
                }
                var currentReducer = reducer;
                var currentState = preloadedState;
                var currentListeners = [];
                var nextListeners = currentListeners;
                var isDispatching = false;
                function ensureCanMutateNextListeners() {
                  if (nextListeners === currentListeners) {
                    nextListeners = currentListeners.slice();
                  }
                }
                function getState() {
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(3) : 0);
                  }
                  return currentState;
                }
                function subscribe(listener) {
                  if (typeof listener !== "function") {
                    throw new Error(true ? formatProdErrorMessage(4) : 0);
                  }
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(5) : 0);
                  }
                  var isSubscribed = true;
                  ensureCanMutateNextListeners();
                  nextListeners.push(listener);
                  return function unsubscribe() {
                    if (!isSubscribed) {
                      return;
                    }
                    if (isDispatching) {
                      throw new Error(true ? formatProdErrorMessage(6) : 0);
                    }
                    isSubscribed = false;
                    ensureCanMutateNextListeners();
                    var index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1);
                    currentListeners = null;
                  };
                }
                function dispatch2(action) {
                  if (!isPlainObject(action)) {
                    throw new Error(true ? formatProdErrorMessage(7) : 0);
                  }
                  if (typeof action.type === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(8) : 0);
                  }
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(9) : 0);
                  }
                  try {
                    isDispatching = true;
                    currentState = currentReducer(currentState, action);
                  } finally {
                    isDispatching = false;
                  }
                  var listeners = currentListeners = nextListeners;
                  for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    listener();
                  }
                  return action;
                }
                function replaceReducer(nextReducer) {
                  if (typeof nextReducer !== "function") {
                    throw new Error(true ? formatProdErrorMessage(10) : 0);
                  }
                  currentReducer = nextReducer;
                  dispatch2({
                    type: ActionTypes.REPLACE
                  });
                }
                function observable() {
                  var _ref;
                  var outerSubscribe = subscribe;
                  return _ref = {
                    subscribe: function subscribe2(observer2) {
                      if (typeof observer2 !== "object" || observer2 === null) {
                        throw new Error(true ? formatProdErrorMessage(11) : 0);
                      }
                      function observeState() {
                        if (observer2.next) {
                          observer2.next(getState());
                        }
                      }
                      observeState();
                      var unsubscribe = outerSubscribe(observeState);
                      return {
                        unsubscribe
                      };
                    }
                  }, _ref[$$observable] = function() {
                    return this;
                  }, _ref;
                }
                dispatch2({
                  type: ActionTypes.INIT
                });
                return _ref2 = {
                  dispatch: dispatch2,
                  subscribe,
                  getState,
                  replaceReducer
                }, _ref2[$$observable] = observable, _ref2;
              }
              function warning(message) {
                if (typeof console !== "undefined" && typeof console.error === "function") {
                  console.error(message);
                }
                try {
                  throw new Error(message);
                } catch (e) {
                }
              }
              function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                var reducerKeys = Object.keys(reducers);
                var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (reducerKeys.length === 0) {
                  return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                }
                if (!isPlainObject(inputState)) {
                  return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
                }
                var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                  return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                });
                unexpectedKeys.forEach(function(key) {
                  unexpectedKeyCache[key] = true;
                });
                if (action && action.type === ActionTypes.REPLACE)
                  return;
                if (unexpectedKeys.length > 0) {
                  return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
                }
              }
              function assertReducerShape(reducers) {
                Object.keys(reducers).forEach(function(key) {
                  var reducer = reducers[key];
                  var initialState = reducer(void 0, {
                    type: ActionTypes.INIT
                  });
                  if (typeof initialState === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(12) : 0);
                  }
                  if (typeof reducer(void 0, {
                    type: ActionTypes.PROBE_UNKNOWN_ACTION()
                  }) === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(13) : 0);
                  }
                });
              }
              function combineReducers(reducers) {
                var reducerKeys = Object.keys(reducers);
                var finalReducers = {};
                for (var i = 0; i < reducerKeys.length; i++) {
                  var key = reducerKeys[i];
                  if (false) {
                  }
                  if (typeof reducers[key] === "function") {
                    finalReducers[key] = reducers[key];
                  }
                }
                var finalReducerKeys = Object.keys(finalReducers);
                var unexpectedKeyCache;
                if (false) {
                }
                var shapeAssertionError;
                try {
                  assertReducerShape(finalReducers);
                } catch (e) {
                  shapeAssertionError = e;
                }
                return function combination(state, action) {
                  if (state === void 0) {
                    state = {};
                  }
                  if (shapeAssertionError) {
                    throw shapeAssertionError;
                  }
                  if (false) {
                    var warningMessage;
                  }
                  var hasChanged2 = false;
                  var nextState = {};
                  for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                    var _key = finalReducerKeys[_i];
                    var reducer = finalReducers[_key];
                    var previousStateForKey = state[_key];
                    var nextStateForKey = reducer(previousStateForKey, action);
                    if (typeof nextStateForKey === "undefined") {
                      var actionType = action && action.type;
                      throw new Error(true ? formatProdErrorMessage(14) : 0);
                    }
                    nextState[_key] = nextStateForKey;
                    hasChanged2 = hasChanged2 || nextStateForKey !== previousStateForKey;
                  }
                  hasChanged2 = hasChanged2 || finalReducerKeys.length !== Object.keys(state).length;
                  return hasChanged2 ? nextState : state;
                };
              }
              function bindActionCreator(actionCreator, dispatch2) {
                return function() {
                  return dispatch2(actionCreator.apply(this, arguments));
                };
              }
              function bindActionCreators(actionCreators, dispatch2) {
                if (typeof actionCreators === "function") {
                  return bindActionCreator(actionCreators, dispatch2);
                }
                if (typeof actionCreators !== "object" || actionCreators === null) {
                  throw new Error(true ? formatProdErrorMessage(16) : 0);
                }
                var boundActionCreators = {};
                for (var key in actionCreators) {
                  var actionCreator = actionCreators[key];
                  if (typeof actionCreator === "function") {
                    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch2);
                  }
                }
                return boundActionCreators;
              }
              function compose() {
                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                  funcs[_key] = arguments[_key];
                }
                if (funcs.length === 0) {
                  return function(arg) {
                    return arg;
                  };
                }
                if (funcs.length === 1) {
                  return funcs[0];
                }
                return funcs.reduce(function(a, b) {
                  return function() {
                    return a(b.apply(void 0, arguments));
                  };
                });
              }
              function applyMiddleware() {
                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                  middlewares[_key] = arguments[_key];
                }
                return function(createStore2) {
                  return function() {
                    var store2 = createStore2.apply(void 0, arguments);
                    var _dispatch = function dispatch2() {
                      throw new Error(true ? formatProdErrorMessage(15) : 0);
                    };
                    var middlewareAPI = {
                      getState: store2.getState,
                      dispatch: function dispatch2() {
                        return _dispatch.apply(void 0, arguments);
                      }
                    };
                    var chain = middlewares.map(function(middleware) {
                      return middleware(middlewareAPI);
                    });
                    _dispatch = compose.apply(void 0, chain)(store2.dispatch);
                    return _objectSpread22(_objectSpread22({}, store2), {}, {
                      dispatch: _dispatch
                    });
                  };
                };
              }
              function isCrushed() {
              }
              if (false) {
              }
            }
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              exports: {}
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          !function() {
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? function() {
                return module2["default"];
              } : function() {
                return module2;
              };
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          }();
          !function() {
            __webpack_require__.d = function(exports2, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          }();
          !function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          }();
          !function() {
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          }();
          var __webpack_exports__ = {};
          !function() {
            var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
            var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
            var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
            var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
            var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
            var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
            var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);
            __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
          }();
          __webpack_exports__ = __webpack_exports__["default"];
          return __webpack_exports__;
        }();
      });
    }
  });

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
      if (node._x_cleanups) {
        while (node._x_cleanups.length)
          node._x_cleanups.pop()();
      }
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, {
                ...property,
                get: getter,
                set: setter
              });
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject22 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject22(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          utilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return callback(el, utilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport",
    "element"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay3 = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay3,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay3,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    let clickAwayCompatibleShow = () => {
      document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        queueMicrotask(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay3 = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay3);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    if (attr === "")
      return true;
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, object) {
    binds[name] = typeof object !== "function" ? () => object : object;
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.10.0",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = false ? Object.freeze({}) : {};
  var EMPTY_ARR = false ? Object.freeze([]) : [];
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(false ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(false ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (false) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (false) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (false) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (false) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = false ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (false) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (false) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el, { expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup2(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.target === el && next(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    handler3 = wrapHandler(handler3, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      } });
    });
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      return applyBindingsObject(el, expression, original, effect3);
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && expression.match(/\./))
        result = "";
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function applyBindingsObject(el, expression, original, effect3) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    }, { scope: bindingProviders });
  }
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup: cleanup2 }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => el.style.display = "none");
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject22 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject22(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { $event: e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@alpinejs/focus/dist/module.esm.js
  var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var matches = typeof Element === "undefined" ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getCandidates = function getCandidates2(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
  };
  var isContentEditable = function isContentEditable2(node) {
    return node.contentEditable === "true";
  };
  var getTabindex = function getTabindex2(node) {
    var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
    if (!isNaN(tabindexAttr)) {
      return tabindexAttr;
    }
    if (isContentEditable(node)) {
      return 0;
    }
    if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
      return 0;
    }
    return node.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || node.ownerDocument;
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isHidden = function isHidden2(node, displayCheck) {
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full") {
      while (node) {
        if (getComputedStyle(node).display === "none") {
          return true;
        }
        node = node.parentElement;
      }
    } else if (displayCheck === "non-zero-area") {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (isInput(node) || node.tagName === "SELECT" || node.tagName === "TEXTAREA" || node.tagName === "BUTTON") {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);
            if (child.tagName === "LEGEND") {
              if (child.contains(node)) {
                return false;
              }
              return true;
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
      return false;
    }
    return true;
  };
  var tabbable = function tabbable2(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    candidates.forEach(function(candidate, i) {
      var candidateTabindex = getTabindex(candidate);
      if (candidateTabindex === 0) {
        regularTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          node: candidate
        });
      }
    });
    var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
      return a.node;
    }).concat(regularTabbables);
    return tabbableNodes;
  };
  var focusable = function focusable2(el, options) {
    options = options || {};
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    return candidates;
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys2(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var activeFocusTraps = function() {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];
          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }
        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();
  var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
  };
  var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
  };
  var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
  };
  var delay = function delay2(fn) {
    return setTimeout(fn, 0);
  };
  var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
      if (fn(value)) {
        idx = i;
        return false;
      }
      return true;
    });
    return idx;
  };
  var valueOrHandler = function valueOrHandler2(value) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
  };
  var createFocusTrap = function createFocusTrap2(elements, userOptions) {
    var doc = document;
    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);
    var state = {
      containers: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
      return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var containersContain = function containersContain2(element) {
      return state.containers.some(function(container) {
        return container.contains(element);
      });
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
      var optionValue = config[optionName];
      if (!optionValue) {
        return null;
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        node = doc.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` refers to no known node"));
        }
      }
      if (typeof optionValue === "function") {
        node = optionValue();
        if (!node) {
          throw new Error("`".concat(optionName, "` did not return a node"));
        }
      }
      return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
      var node;
      if (getOption({}, "initialFocus") === false) {
        return false;
      }
      if (getNodeForOption("initialFocus") !== null) {
        node = getNodeForOption("initialFocus");
      } else if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
      if (!node) {
        throw new Error("Your focus-trap needs to have at least one focusable element");
      }
      return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
      state.tabbableGroups = state.containers.map(function(container) {
        var tabbableNodes = tabbable(container);
        if (tabbableNodes.length > 0) {
          return {
            container,
            firstTabbableNode: tabbableNodes[0],
            lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
          };
        }
        return void 0;
      }).filter(function(group) {
        return !!group;
      });
      if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
        throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      }
    };
    var tryFocus = function tryFocus2(node) {
      if (node === false) {
        return;
      }
      if (node === doc.activeElement) {
        return;
      }
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;
      if (isSelectableInput(node)) {
        node.select();
      }
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
      var node = getNodeForOption("setReturnFocus");
      return node ? node : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
      if (containersContain(e.target)) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
        });
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
      var targetContained = containersContain(e.target);
      if (targetContained || e.target instanceof Document) {
        if (targetContained) {
          state.mostRecentlyFocusedNode = e.target;
        }
      } else {
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    };
    var checkTab = function checkTab2(e) {
      updateTabbableNodes();
      var destinationNode = null;
      if (state.tabbableGroups.length > 0) {
        var containerIndex = findIndex(state.tabbableGroups, function(_ref) {
          var container = _ref.container;
          return container.contains(e.target);
        });
        if (containerIndex < 0) {
          if (e.shiftKey) {
            destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
          } else {
            destinationNode = state.tabbableGroups[0].firstTabbableNode;
          }
        } else if (e.shiftKey) {
          var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
            var firstTabbableNode = _ref2.firstTabbableNode;
            return e.target === firstTabbableNode;
          });
          if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
            startOfGroupIndex = containerIndex;
          }
          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
            var lastTabbableNode = _ref3.lastTabbableNode;
            return e.target === lastTabbableNode;
          });
          if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
            lastOfGroupIndex = containerIndex;
          }
          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }
      } else {
        destinationNode = getNodeForOption("fallbackFocus");
      }
      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    };
    var checkKey = function checkKey2(e) {
      if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates) !== false) {
        e.preventDefault();
        trap.deactivate();
        return;
      }
      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    };
    var checkClick = function checkClick2(e) {
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        return;
      }
      if (containersContain(e.target)) {
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
      if (!state.active) {
        return;
      }
      activeFocusTraps.activateTrap(trap);
      state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener("focusin", checkFocusIn, true);
      doc.addEventListener("mousedown", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("touchstart", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("click", checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener("keydown", checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    };
    var removeListeners = function removeListeners2() {
      if (!state.active) {
        return;
      }
      doc.removeEventListener("focusin", checkFocusIn, true);
      doc.removeEventListener("mousedown", checkPointerDown, true);
      doc.removeEventListener("touchstart", checkPointerDown, true);
      doc.removeEventListener("click", checkClick, true);
      doc.removeEventListener("keydown", checkKey, true);
      return trap;
    };
    trap = {
      activate: function activate(activateOptions) {
        if (state.active) {
          return this;
        }
        var onActivate = getOption(activateOptions, "onActivate");
        var onPostActivate = getOption(activateOptions, "onPostActivate");
        var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        if (onActivate) {
          onActivate();
        }
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          if (onPostActivate) {
            onPostActivate();
          }
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
        return this;
      },
      deactivate: function deactivate(deactivateOptions) {
        if (!state.active) {
          return this;
        }
        clearTimeout(state.delayInitialFocusTimer);
        state.delayInitialFocusTimer = void 0;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = getOption(deactivateOptions, "onDeactivate");
        var onPostDeactivate = getOption(deactivateOptions, "onPostDeactivate");
        var checkCanReturnFocus = getOption(deactivateOptions, "checkCanReturnFocus");
        if (onDeactivate) {
          onDeactivate();
        }
        var returnFocus = getOption(deactivateOptions, "returnFocus", "returnFocusOnDeactivate");
        var finishDeactivation = function finishDeactivation2() {
          delay(function() {
            if (returnFocus) {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            }
            if (onPostDeactivate) {
              onPostDeactivate();
            }
          });
        };
        if (returnFocus && checkCanReturnFocus) {
          checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
          return this;
        }
        finishDeactivation();
        return this;
      },
      pause: function pause() {
        if (state.paused || !state.active) {
          return this;
        }
        state.paused = true;
        removeListeners();
        return this;
      },
      unpause: function unpause() {
        if (!state.paused || !state.active) {
          return this;
        }
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return this;
      },
      updateContainerElements: function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function(element) {
          return typeof element === "string" ? doc.querySelector(element) : element;
        });
        if (state.active) {
          updateTabbableNodes();
        }
        return this;
      }
    };
    trap.updateContainerElements(elements);
    return trap;
  };
  function src_default2(Alpine2) {
    let lastFocused;
    let currentFocused;
    window.addEventListener("focusin", () => {
      lastFocused = currentFocused;
      currentFocused = document.activeElement;
    });
    Alpine2.magic("focus", (el) => {
      let within = el;
      return {
        __noscroll: false,
        __wrapAround: false,
        within(el2) {
          within = el2;
          return this;
        },
        withoutScrolling() {
          this.__noscroll = true;
          return this;
        },
        noscroll() {
          this.__noscroll = true;
          return this;
        },
        withWrapAround() {
          this.__wrapAround = true;
          return this;
        },
        wrap() {
          return this.withWrapAround();
        },
        focusable(el2) {
          return isFocusable(el2);
        },
        previouslyFocused() {
          return lastFocused;
        },
        lastFocused() {
          return lastFocused;
        },
        focused() {
          return currentFocused;
        },
        focusables() {
          if (Array.isArray(within))
            return within;
          return focusable(within, { displayCheck: "none" });
        },
        all() {
          return this.focusables();
        },
        isFirst(el2) {
          let els = this.all();
          return els[0] && els[0].isSameNode(el2);
        },
        isLast(el2) {
          let els = this.all();
          return els.length && els.slice(-1)[0].isSameNode(el2);
        },
        getFirst() {
          return this.all()[0];
        },
        getLast() {
          return this.all().slice(-1)[0];
        },
        getNext() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
            return list[0];
          }
          return list[list.indexOf(current) + 1];
        },
        getPrevious() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === 0) {
            return list.slice(-1)[0];
          }
          return list[list.indexOf(current) - 1];
        },
        first() {
          this.focus(this.getFirst());
        },
        last() {
          this.focus(this.getLast());
        },
        next() {
          this.focus(this.getNext());
        },
        previous() {
          this.focus(this.getPrevious());
        },
        prev() {
          return this.previous();
        },
        focus(el2) {
          if (!el2)
            return;
          setTimeout(() => {
            if (!el2.hasAttribute("tabindex"))
              el2.setAttribute("tabindex", "0");
            el2.focus({ preventScroll: this._noscroll });
          });
        }
      };
    });
    Alpine2.directive("trap", Alpine2.skipDuringClone((el, { expression, modifiers }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluator = evaluateLater2(expression);
      let oldValue = false;
      let trap = createFocusTrap(el, {
        escapeDeactivates: false,
        allowOutsideClick: true,
        fallbackFocus: () => el
      });
      let undoInert = () => {
      };
      let undoDisableScrolling = () => {
      };
      const releaseFocus = () => {
        undoInert();
        undoInert = () => {
        };
        undoDisableScrolling();
        undoDisableScrolling = () => {
        };
        trap.deactivate({
          returnFocus: !modifiers.includes("noreturn")
        });
      };
      effect3(() => evaluator((value) => {
        if (oldValue === value)
          return;
        if (value && !oldValue) {
          setTimeout(() => {
            if (modifiers.includes("inert"))
              undoInert = setInert(el);
            if (modifiers.includes("noscroll"))
              undoDisableScrolling = disableScrolling();
            trap.activate();
          });
        }
        if (!value && oldValue) {
          releaseFocus();
        }
        oldValue = !!value;
      }));
      cleanup2(releaseFocus);
    }, (el, { expression, modifiers }, { evaluate: evaluate2 }) => {
      if (modifiers.includes("inert") && evaluate2(expression))
        setInert(el);
    }));
  }
  function setInert(el) {
    let undos = [];
    crawlSiblingsUp(el, (sibling) => {
      let cache = sibling.hasAttribute("aria-hidden");
      sibling.setAttribute("aria-hidden", "true");
      undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
    });
    return () => {
      while (undos.length)
        undos.pop()();
    };
  }
  function crawlSiblingsUp(el, callback) {
    if (el.isSameNode(document.body) || !el.parentNode)
      return;
    Array.from(el.parentNode.children).forEach((sibling) => {
      if (!sibling.isSameNode(el))
        callback(sibling);
      crawlSiblingsUp(el.parentNode, callback);
    });
  }
  function disableScrolling() {
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }
  var module_default2 = src_default2;

  // node_modules/@glidejs/glide/dist/glide.esm.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  var defaults = {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: false,
    hoverpause: true,
    keyboard: true,
    bound: false,
    swipeThreshold: 80,
    dragThreshold: 120,
    perSwipe: "",
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: true,
    rewindDuration: 800,
    animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    waitForTransition: true,
    throttle: 10,
    direction: "ltr",
    peek: 0,
    cloningRatio: 1,
    breakpoints: {},
    classes: {
      swipeable: "glide--swipeable",
      dragging: "glide--dragging",
      direction: {
        ltr: "glide--ltr",
        rtl: "glide--rtl"
      },
      type: {
        slider: "glide--slider",
        carousel: "glide--carousel"
      },
      slide: {
        clone: "glide__slide--clone",
        active: "glide__slide--active"
      },
      arrow: {
        disabled: "glide__arrow--disabled"
      },
      nav: {
        active: "glide__bullet--active"
      }
    }
  };
  function warn2(msg) {
    console.error("[Glide warn]: ".concat(msg));
  }
  function toInt(value) {
    return parseInt(value);
  }
  function toFloat(value) {
    return parseFloat(value);
  }
  function isString2(value) {
    return typeof value === "string";
  }
  function isObject2(value) {
    var type = _typeof(value);
    return type === "function" || type === "object" && !!value;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isUndefined(value) {
    return typeof value === "undefined";
  }
  function isArray2(value) {
    return value.constructor === Array;
  }
  function mount(glide, extensions, events) {
    var components = {};
    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn2("Extension must be a function");
      }
    }
    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }
    return components;
  }
  function define2(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function(r, k) {
      r[k] = obj[k];
      return r[k], r;
    }, {});
  }
  function mergeOptions(defaults2, settings) {
    var options = Object.assign({}, defaults2, settings);
    if (settings.hasOwnProperty("classes")) {
      options.classes = Object.assign({}, defaults2.classes, settings.classes);
      if (settings.classes.hasOwnProperty("direction")) {
        options.classes.direction = Object.assign({}, defaults2.classes.direction, settings.classes.direction);
      }
      if (settings.classes.hasOwnProperty("type")) {
        options.classes.type = Object.assign({}, defaults2.classes.type, settings.classes.type);
      }
      if (settings.classes.hasOwnProperty("slide")) {
        options.classes.slide = Object.assign({}, defaults2.classes.slide, settings.classes.slide);
      }
      if (settings.classes.hasOwnProperty("arrow")) {
        options.classes.arrow = Object.assign({}, defaults2.classes.arrow, settings.classes.arrow);
      }
      if (settings.classes.hasOwnProperty("nav")) {
        options.classes.nav = Object.assign({}, defaults2.classes.nav, settings.classes.nav);
      }
    }
    if (settings.hasOwnProperty("breakpoints")) {
      options.breakpoints = Object.assign({}, defaults2.breakpoints, settings.breakpoints);
    }
    return options;
  }
  var EventsBus = /* @__PURE__ */ function() {
    function EventsBus2() {
      var events = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, EventsBus2);
      this.events = events;
      this.hop = events.hasOwnProperty;
    }
    _createClass(EventsBus2, [{
      key: "on",
      value: function on2(event, handler3) {
        if (isArray2(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler3);
          }
          return;
        }
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }
        var index = this.events[event].push(handler3) - 1;
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }
    }, {
      key: "emit",
      value: function emit(event, context) {
        if (isArray2(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
          return;
        }
        if (!this.hop.call(this.events, event)) {
          return;
        }
        this.events[event].forEach(function(item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus2;
  }();
  var Glide$1 = /* @__PURE__ */ function() {
    function Glide2(selector) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Glide2);
      this._c = {};
      this._t = [];
      this._e = new EventsBus();
      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }
    _createClass(Glide2, [{
      key: "mount",
      value: function mount$1() {
        var extensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this._e.emit("mount.before");
        if (isObject2(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn2("You need to provide a object on `mount()`");
        }
        this._e.emit("mount.after");
        return this;
      }
    }, {
      key: "mutate",
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (isArray2(transformers)) {
          this._t = transformers;
        } else {
          warn2("You need to provide a array on `mutate()`");
        }
        return this;
      }
    }, {
      key: "update",
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.settings = mergeOptions(this.settings, settings);
        if (settings.hasOwnProperty("startAt")) {
          this.index = settings.startAt;
        }
        this._e.emit("update");
        return this;
      }
    }, {
      key: "go",
      value: function go(pattern) {
        this._c.Run.make(pattern);
        return this;
      }
    }, {
      key: "move",
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._e.emit("destroy");
        return this;
      }
    }, {
      key: "play",
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (interval) {
          this.settings.autoplay = interval;
        }
        this._e.emit("play");
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        this._e.emit("pause");
        return this;
      }
    }, {
      key: "disable",
      value: function disable() {
        this.disabled = true;
        return this;
      }
    }, {
      key: "enable",
      value: function enable() {
        this.disabled = false;
        return this;
      }
    }, {
      key: "on",
      value: function on2(event, handler3) {
        this._e.on(event, handler3);
        return this;
      }
    }, {
      key: "isType",
      value: function isType(name) {
        return this.settings.type === name;
      }
    }, {
      key: "settings",
      get: function get3() {
        return this._o;
      },
      set: function set3(o) {
        if (isObject2(o)) {
          this._o = o;
        } else {
          warn2("Options must be an `object` instance.");
        }
      }
    }, {
      key: "index",
      get: function get3() {
        return this._i;
      },
      set: function set3(i) {
        this._i = toInt(i);
      }
    }, {
      key: "type",
      get: function get3() {
        return this.settings.type;
      }
    }, {
      key: "disabled",
      get: function get3() {
        return this._d;
      },
      set: function set3(status) {
        this._d = !!status;
      }
    }]);
    return Glide2;
  }();
  function Run(Glide2, Components, Events) {
    var Run2 = {
      mount: function mount2() {
        this._o = false;
      },
      make: function make(move) {
        var _this = this;
        if (!Glide2.disabled) {
          !Glide2.settings.waitForTransition || Glide2.disable();
          this.move = move;
          Events.emit("run.before", this.move);
          this.calculate();
          Events.emit("run", this.move);
          Components.Transition.after(function() {
            if (_this.isStart()) {
              Events.emit("run.start", _this.move);
            }
            if (_this.isEnd()) {
              Events.emit("run.end", _this.move);
            }
            if (_this.isOffset()) {
              _this._o = false;
              Events.emit("run.offset", _this.move);
            }
            Events.emit("run.after", _this.move);
            Glide2.enable();
          });
        }
      },
      calculate: function calculate() {
        var move = this.move, length = this.length;
        var steps = move.steps, direction = move.direction;
        var viewSize = 1;
        if (direction === "=") {
          if (Glide2.settings.bound && toInt(steps) > length) {
            Glide2.index = length;
            return;
          }
          Glide2.index = steps;
          return;
        }
        if (direction === ">" && steps === ">") {
          Glide2.index = length;
          return;
        }
        if (direction === "<" && steps === "<") {
          Glide2.index = 0;
          return;
        }
        if (direction === "|") {
          viewSize = Glide2.settings.perView || 1;
        }
        if (direction === ">" || direction === "|" && steps === ">") {
          var index = calculateForwardIndex(viewSize);
          if (index > length) {
            this._o = true;
          }
          Glide2.index = normalizeForwardIndex(index, viewSize);
          return;
        }
        if (direction === "<" || direction === "|" && steps === "<") {
          var _index = calculateBackwardIndex(viewSize);
          if (_index < 0) {
            this._o = true;
          }
          Glide2.index = normalizeBackwardIndex(_index, viewSize);
          return;
        }
        warn2("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
      },
      isStart: function isStart() {
        return Glide2.index <= 0;
      },
      isEnd: function isEnd() {
        return Glide2.index >= this.length;
      },
      isOffset: function isOffset() {
        var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        if (!direction) {
          return this._o;
        }
        if (!this._o) {
          return false;
        }
        if (direction === "|>") {
          return this.move.direction === "|" && this.move.steps === ">";
        }
        if (direction === "|<") {
          return this.move.direction === "|" && this.move.steps === "<";
        }
        return this.move.direction === direction;
      },
      isBound: function isBound() {
        return Glide2.isType("slider") && Glide2.settings.focusAt !== "center" && Glide2.settings.bound;
      }
    };
    function calculateForwardIndex(viewSize) {
      var index = Glide2.index;
      if (Glide2.isType("carousel")) {
        return index + viewSize;
      }
      return index + (viewSize - index % viewSize);
    }
    function normalizeForwardIndex(index, viewSize) {
      var length = Run2.length;
      if (index <= length) {
        return index;
      }
      if (Glide2.isType("carousel")) {
        return index - (length + 1);
      }
      if (Glide2.settings.rewind) {
        if (Run2.isBound() && !Run2.isEnd()) {
          return length;
        }
        return 0;
      }
      if (Run2.isBound()) {
        return length;
      }
      return Math.floor(length / viewSize) * viewSize;
    }
    function calculateBackwardIndex(viewSize) {
      var index = Glide2.index;
      if (Glide2.isType("carousel")) {
        return index - viewSize;
      }
      var view = Math.ceil(index / viewSize);
      return (view - 1) * viewSize;
    }
    function normalizeBackwardIndex(index, viewSize) {
      var length = Run2.length;
      if (index >= 0) {
        return index;
      }
      if (Glide2.isType("carousel")) {
        return index + (length + 1);
      }
      if (Glide2.settings.rewind) {
        if (Run2.isBound() && Run2.isStart()) {
          return length;
        }
        return Math.floor(length / viewSize) * viewSize;
      }
      return 0;
    }
    define2(Run2, "move", {
      get: function get3() {
        return this._m;
      },
      set: function set3(value) {
        var step = value.substr(1);
        this._m = {
          direction: value.substr(0, 1),
          steps: step ? toInt(step) ? toInt(step) : step : 0
        };
      }
    });
    define2(Run2, "length", {
      get: function get3() {
        var settings = Glide2.settings;
        var length = Components.Html.slides.length;
        if (this.isBound()) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }
        return length - 1;
      }
    });
    define2(Run2, "offset", {
      get: function get3() {
        return this._o;
      }
    });
    return Run2;
  }
  function now() {
    return new Date().getTime();
  }
  function throttle2(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options)
      options = {};
    var later = function later2() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout)
        context = args = null;
    };
    var throttled = function throttled2() {
      var at = now();
      if (!previous && options.leading === false)
        previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout)
          context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };
    return throttled;
  }
  var MARGIN_TYPE = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"]
  };
  function Gaps(Glide2, Components, Events) {
    var Gaps2 = {
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;
          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][0]] = "";
          }
          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][1]] = "";
          }
        }
      },
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          style.marginLeft = "";
          style.marginRight = "";
        }
      }
    };
    define2(Gaps2, "value", {
      get: function get3() {
        return toInt(Glide2.settings.gap);
      }
    });
    define2(Gaps2, "grow", {
      get: function get3() {
        return Gaps2.value * Components.Sizes.length;
      }
    });
    define2(Gaps2, "reductor", {
      get: function get3() {
        var perView = Glide2.settings.perView;
        return Gaps2.value * (perView - 1) / perView;
      }
    });
    Events.on(["build.after", "update"], throttle2(function() {
      Gaps2.apply(Components.Html.wrapper.children);
    }, 30));
    Events.on("destroy", function() {
      Gaps2.remove(Components.Html.wrapper.children);
    });
    return Gaps2;
  }
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }
      return matched;
    }
    return [];
  }
  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }
    return false;
  }
  var TRACK_SELECTOR = '[data-glide-el="track"]';
  function Html(Glide2, Components, Events) {
    var Html2 = {
      mount: function mount2() {
        this.root = Glide2.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.collectSlides();
      },
      collectSlides: function collectSlides() {
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(slide) {
          return !slide.classList.contains(Glide2.settings.classes.slide.clone);
        });
      }
    };
    define2(Html2, "root", {
      get: function get3() {
        return Html2._r;
      },
      set: function set3(r) {
        if (isString2(r)) {
          r = document.querySelector(r);
        }
        if (exist(r)) {
          Html2._r = r;
        } else {
          warn2("Root element must be a existing Html node");
        }
      }
    });
    define2(Html2, "track", {
      get: function get3() {
        return Html2._t;
      },
      set: function set3(t) {
        if (exist(t)) {
          Html2._t = t;
        } else {
          warn2("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
        }
      }
    });
    define2(Html2, "wrapper", {
      get: function get3() {
        return Html2.track.children[0];
      }
    });
    Events.on("update", function() {
      Html2.collectSlides();
    });
    return Html2;
  }
  function Peek(Glide2, Components, Events) {
    var Peek2 = {
      mount: function mount2() {
        this.value = Glide2.settings.peek;
      }
    };
    define2(Peek2, "value", {
      get: function get3() {
        return Peek2._v;
      },
      set: function set3(value) {
        if (isObject2(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }
        Peek2._v = value;
      }
    });
    define2(Peek2, "reductor", {
      get: function get3() {
        var value = Peek2.value;
        var perView = Glide2.settings.perView;
        if (isObject2(value)) {
          return value.before / perView + value.after / perView;
        }
        return value * 2 / perView;
      }
    });
    Events.on(["resize", "update"], function() {
      Peek2.mount();
    });
    return Peek2;
  }
  function Move(Glide2, Components, Events) {
    var Move2 = {
      mount: function mount2() {
        this._o = 0;
      },
      make: function make() {
        var _this = this;
        var offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        this.offset = offset;
        Events.emit("move", {
          movement: this.value
        });
        Components.Transition.after(function() {
          Events.emit("move.after", {
            movement: _this.value
          });
        });
      }
    };
    define2(Move2, "offset", {
      get: function get3() {
        return Move2._o;
      },
      set: function set3(value) {
        Move2._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });
    define2(Move2, "translate", {
      get: function get3() {
        return Components.Sizes.slideWidth * Glide2.index;
      }
    });
    define2(Move2, "value", {
      get: function get3() {
        var offset = this.offset;
        var translate = this.translate;
        if (Components.Direction.is("rtl")) {
          return translate + offset;
        }
        return translate - offset;
      }
    });
    Events.on(["build.before", "run"], function() {
      Move2.make();
    });
    return Move2;
  }
  function Sizes(Glide2, Components, Events) {
    var Sizes2 = {
      setupSlides: function setupSlides() {
        var width = "".concat(this.slideWidth, "px");
        var slides = Components.Html.slides;
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = width;
        }
      },
      setupWrapper: function setupWrapper() {
        Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
      },
      remove: function remove() {
        var slides = Components.Html.slides;
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = "";
        }
        Components.Html.wrapper.style.width = "";
      }
    };
    define2(Sizes2, "length", {
      get: function get3() {
        return Components.Html.slides.length;
      }
    });
    define2(Sizes2, "width", {
      get: function get3() {
        return Components.Html.track.offsetWidth;
      }
    });
    define2(Sizes2, "wrapperSize", {
      get: function get3() {
        return Sizes2.slideWidth * Sizes2.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });
    define2(Sizes2, "slideWidth", {
      get: function get3() {
        return Sizes2.width / Glide2.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });
    Events.on(["build.before", "resize", "update"], function() {
      Sizes2.setupSlides();
      Sizes2.setupWrapper();
    });
    Events.on("destroy", function() {
      Sizes2.remove();
    });
    return Sizes2;
  }
  function Build(Glide2, Components, Events) {
    var Build2 = {
      mount: function mount2() {
        Events.emit("build.before");
        this.typeClass();
        this.activeClass();
        Events.emit("build.after");
      },
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide2.settings.classes.type[Glide2.settings.type]);
      },
      activeClass: function activeClass() {
        var classes = Glide2.settings.classes;
        var slide = Components.Html.slides[Glide2.index];
        if (slide) {
          slide.classList.add(classes.slide.active);
          siblings(slide).forEach(function(sibling) {
            sibling.classList.remove(classes.slide.active);
          });
        }
      },
      removeClasses: function removeClasses() {
        var _Glide$settings$class = Glide2.settings.classes, type = _Glide$settings$class.type, slide = _Glide$settings$class.slide;
        Components.Html.root.classList.remove(type[Glide2.settings.type]);
        Components.Html.slides.forEach(function(sibling) {
          sibling.classList.remove(slide.active);
        });
      }
    };
    Events.on(["destroy", "update"], function() {
      Build2.removeClasses();
    });
    Events.on(["resize", "update"], function() {
      Build2.mount();
    });
    Events.on("move.after", function() {
      Build2.activeClass();
    });
    return Build2;
  }
  function Clones(Glide2, Components, Events) {
    var Clones2 = {
      mount: function mount2() {
        this.items = [];
        if (Glide2.isType("carousel")) {
          this.items = this.collect();
        }
      },
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide2.settings, perView = _Glide$settings.perView, classes = _Glide$settings.classes, cloningRatio = _Glide$settings.cloningRatio;
        if (slides.length !== 0) {
          var peekIncrementer = +!!Glide2.settings.peek;
          var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
          var append = slides.slice(0, cloneCount).reverse();
          var prepend = slides.slice(cloneCount * -1);
          for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
            for (var i = 0; i < append.length; i++) {
              var clone2 = append[i].cloneNode(true);
              clone2.classList.add(classes.slide.clone);
              items.push(clone2);
            }
            for (var _i = 0; _i < prepend.length; _i++) {
              var _clone = prepend[_i].cloneNode(true);
              _clone.classList.add(classes.slide.clone);
              items.unshift(_clone);
            }
          }
        }
        return items;
      },
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html, wrapper = _Components$Html.wrapper, slides = _Components$Html.slides;
        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append2 = items.slice(half * -1).reverse();
        var width = "".concat(Components.Sizes.slideWidth, "px");
        for (var i = 0; i < append2.length; i++) {
          wrapper.appendChild(append2[i]);
        }
        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }
        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = width;
        }
      },
      remove: function remove() {
        var items = this.items;
        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };
    define2(Clones2, "grow", {
      get: function get3() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones2.items.length;
      }
    });
    Events.on("update", function() {
      Clones2.remove();
      Clones2.mount();
      Clones2.append();
    });
    Events.on("build.before", function() {
      if (Glide2.isType("carousel")) {
        Clones2.append();
      }
    });
    Events.on("destroy", function() {
      Clones2.remove();
    });
    return Clones2;
  }
  var EventsBinder = /* @__PURE__ */ function() {
    function EventsBinder2() {
      var listeners = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, EventsBinder2);
      this.listeners = listeners;
    }
    _createClass(EventsBinder2, [{
      key: "on",
      value: function on2(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        if (isString2(events)) {
          events = [events];
        }
        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;
          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
    }, {
      key: "off",
      value: function off(events, el) {
        var capture = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (isString2(events)) {
          events = [events];
        }
        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder2;
  }();
  function Resize(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Resize2 = {
      mount: function mount2() {
        this.bind();
      },
      bind: function bind3() {
        Binder.on("resize", window, throttle2(function() {
          Events.emit("resize");
        }, Glide2.settings.throttle));
      },
      unbind: function unbind() {
        Binder.off("resize", window);
      }
    };
    Events.on("destroy", function() {
      Resize2.unbind();
      Binder.destroy();
    });
    return Resize2;
  }
  var VALID_DIRECTIONS = ["ltr", "rtl"];
  var FLIPED_MOVEMENTS = {
    ">": "<",
    "<": ">",
    "=": "="
  };
  function Direction(Glide2, Components, Events) {
    var Direction2 = {
      mount: function mount2() {
        this.value = Glide2.settings.direction;
      },
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);
        if (this.is("rtl")) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }
        return pattern;
      },
      is: function is(direction) {
        return this.value === direction;
      },
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide2.settings.classes.direction[this.value]);
      },
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide2.settings.classes.direction[this.value]);
      }
    };
    define2(Direction2, "value", {
      get: function get3() {
        return Direction2._v;
      },
      set: function set3(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction2._v = value;
        } else {
          warn2("Direction value must be `ltr` or `rtl`");
        }
      }
    });
    Events.on(["destroy", "update"], function() {
      Direction2.removeClass();
    });
    Events.on("update", function() {
      Direction2.mount();
    });
    Events.on(["build.before", "update"], function() {
      Direction2.addClass();
    });
    return Direction2;
  }
  function Rtl(Glide2, Components) {
    return {
      modify: function modify(translate) {
        if (Components.Direction.is("rtl")) {
          return -translate;
        }
        return translate;
      }
    };
  }
  function Gap(Glide2, Components) {
    return {
      modify: function modify(translate) {
        var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
        return translate + Components.Gaps.value * multiplier;
      }
    };
  }
  function Grow(Glide2, Components) {
    return {
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }
  function Peeking(Glide2, Components) {
    return {
      modify: function modify(translate) {
        if (Glide2.settings.focusAt >= 0) {
          var peek = Components.Peek.value;
          if (isObject2(peek)) {
            return translate - peek.before;
          }
          return translate - peek;
        }
        return translate;
      }
    };
  }
  function Focusing(Glide2, Components) {
    return {
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide2.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;
        if (focusAt === "center") {
          return translate - (width / 2 - slideWidth / 2);
        }
        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }
  function mutator(Glide2, Components, Events) {
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide2._t, [Rtl]);
    return {
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];
          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide2, Components, Events).modify(translate);
          } else {
            warn2("Transformer should be a function that returns an object with `modify()` method");
          }
        }
        return translate;
      }
    };
  }
  function Translate(Glide2, Components, Events) {
    var Translate2 = {
      set: function set3(value) {
        var transform = mutator(Glide2, Components).mutate(value);
        var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
        Components.Html.wrapper.style.mozTransform = translate3d;
        Components.Html.wrapper.style.webkitTransform = translate3d;
        Components.Html.wrapper.style.transform = translate3d;
      },
      remove: function remove() {
        Components.Html.wrapper.style.transform = "";
      },
      getStartIndex: function getStartIndex() {
        var length = Components.Sizes.length;
        var index = Glide2.index;
        var perView = Glide2.settings.perView;
        if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) {
          return length + (index - perView);
        }
        return (index + perView) % length;
      },
      getTravelDistance: function getTravelDistance() {
        var travelDistance = Components.Sizes.slideWidth * Glide2.settings.perView;
        if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) {
          return travelDistance * -1;
        }
        return travelDistance;
      }
    };
    Events.on("move", function(context) {
      if (!Glide2.isType("carousel") || !Components.Run.isOffset()) {
        return Translate2.set(context.movement);
      }
      Components.Transition.after(function() {
        Events.emit("translate.jump");
        Translate2.set(Components.Sizes.slideWidth * Glide2.index);
      });
      var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
      return Translate2.set(startWidth - Components.Translate.getTravelDistance());
    });
    Events.on("destroy", function() {
      Translate2.remove();
    });
    return Translate2;
  }
  function Transition(Glide2, Components, Events) {
    var disabled = false;
    var Transition2 = {
      compose: function compose(property) {
        var settings = Glide2.settings;
        if (!disabled) {
          return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
        }
        return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
      },
      set: function set3() {
        var property = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
        Components.Html.wrapper.style.transition = this.compose(property);
      },
      remove: function remove() {
        Components.Html.wrapper.style.transition = "";
      },
      after: function after(callback) {
        setTimeout(function() {
          callback();
        }, this.duration);
      },
      enable: function enable() {
        disabled = false;
        this.set();
      },
      disable: function disable() {
        disabled = true;
        this.set();
      }
    };
    define2(Transition2, "duration", {
      get: function get3() {
        var settings = Glide2.settings;
        if (Glide2.isType("slider") && Components.Run.offset) {
          return settings.rewindDuration;
        }
        return settings.animationDuration;
      }
    });
    Events.on("move", function() {
      Transition2.set();
    });
    Events.on(["build.before", "resize", "translate.jump"], function() {
      Transition2.disable();
    });
    Events.on("run", function() {
      Transition2.enable();
    });
    Events.on("destroy", function() {
      Transition2.remove();
    });
    return Transition2;
  }
  var supportsPassive = false;
  try {
    opts = Object.defineProperty({}, "passive", {
      get: function get3() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
  }
  var opts;
  var supportsPassive$1 = supportsPassive;
  var START_EVENTS = ["touchstart", "mousedown"];
  var MOVE_EVENTS = ["touchmove", "mousemove"];
  var END_EVENTS = ["touchend", "touchcancel", "mouseup", "mouseleave"];
  var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseup", "mouseleave"];
  function Swipe(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Swipe2 = {
      mount: function mount2() {
        this.bindSwipeStart();
      },
      start: function start2(event) {
        if (!disabled && !Glide2.disabled) {
          this.disable();
          var swipe = this.touches(event);
          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);
          this.bindSwipeMove();
          this.bindSwipeEnd();
          Events.emit("swipe.start");
        }
      },
      move: function move(event) {
        if (!Glide2.disabled) {
          var _Glide$settings = Glide2.settings, touchAngle = _Glide$settings.touchAngle, touchRatio = _Glide$settings.touchRatio, classes = _Glide$settings.classes;
          var swipe = this.touches(event);
          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = Math.sqrt(powEX + powEY);
          var swipeCathetus = Math.sqrt(powEY);
          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);
          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();
            Components.Move.make(subExSx * toFloat(touchRatio));
            Components.Html.root.classList.add(classes.dragging);
            Events.emit("swipe.move");
          } else {
            return false;
          }
        }
      },
      end: function end(event) {
        if (!Glide2.disabled) {
          var _Glide$settings2 = Glide2.settings, perSwipe = _Glide$settings2.perSwipe, touchAngle = _Glide$settings2.touchAngle, classes = _Glide$settings2.classes;
          var swipe = this.touches(event);
          var threshold = this.threshold(event);
          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          this.enable();
          if (swipeDistance > threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
          } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
          } else {
            Components.Move.make();
          }
          Components.Html.root.classList.remove(classes.dragging);
          this.unbindSwipeMove();
          this.unbindSwipeEnd();
          Events.emit("swipe.end");
        }
      },
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;
        var _Glide$settings3 = Glide2.settings, swipeThreshold = _Glide$settings3.swipeThreshold, dragThreshold = _Glide$settings3.dragThreshold;
        if (swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function(event) {
            _this.start(event);
          }, capture);
        }
        if (dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function(event) {
            _this.start(event);
          }, capture);
        }
      },
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
        Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
      },
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;
        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle2(function(event) {
          _this2.move(event);
        }, Glide2.settings.throttle), capture);
      },
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
      },
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;
        Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
          _this3.end(event);
        });
      },
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }
        return event.touches[0] || event.changedTouches[0];
      },
      threshold: function threshold(event) {
        var settings = Glide2.settings;
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }
        return settings.swipeThreshold;
      },
      enable: function enable() {
        disabled = false;
        Components.Transition.enable();
        return this;
      },
      disable: function disable() {
        disabled = true;
        Components.Transition.disable();
        return this;
      }
    };
    Events.on("build.after", function() {
      Components.Html.root.classList.add(Glide2.settings.classes.swipeable);
    });
    Events.on("destroy", function() {
      Swipe2.unbindSwipeStart();
      Swipe2.unbindSwipeMove();
      Swipe2.unbindSwipeEnd();
      Binder.destroy();
    });
    return Swipe2;
  }
  function Images(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Images2 = {
      mount: function mount2() {
        this.bind();
      },
      bind: function bind3() {
        Binder.on("dragstart", Components.Html.wrapper, this.dragstart);
      },
      unbind: function unbind() {
        Binder.off("dragstart", Components.Html.wrapper);
      },
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };
    Events.on("destroy", function() {
      Images2.unbind();
      Binder.destroy();
    });
    return Images2;
  }
  function Anchors(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var detached = false;
    var prevented = false;
    var Anchors2 = {
      mount: function mount2() {
        this._a = Components.Html.wrapper.querySelectorAll("a");
        this.bind();
      },
      bind: function bind3() {
        Binder.on("click", Components.Html.wrapper, this.click);
      },
      unbind: function unbind() {
        Binder.off("click", Components.Html.wrapper);
      },
      click: function click(event) {
        if (prevented) {
          event.stopPropagation();
          event.preventDefault();
        }
      },
      detach: function detach() {
        prevented = true;
        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;
          }
          detached = true;
        }
        return this;
      },
      attach: function attach() {
        prevented = false;
        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;
          }
          detached = false;
        }
        return this;
      }
    };
    define2(Anchors2, "items", {
      get: function get3() {
        return Anchors2._a;
      }
    });
    Events.on("swipe.move", function() {
      Anchors2.detach();
    });
    Events.on("swipe.end", function() {
      Components.Transition.after(function() {
        Anchors2.attach();
      });
    });
    Events.on("destroy", function() {
      Anchors2.attach();
      Anchors2.unbind();
      Binder.destroy();
    });
    return Anchors2;
  }
  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
  var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*="<"]');
  var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*=">"]');
  function Controls(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Controls2 = {
      mount: function mount2() {
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
        this._arrowControls = {
          previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
          next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
        };
        this.addBindings();
      },
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },
      addClass: function addClass(controls) {
        var settings = Glide2.settings;
        var item = controls[Glide2.index];
        if (!item) {
          return;
        }
        if (item) {
          item.classList.add(settings.classes.nav.active);
          siblings(item).forEach(function(sibling) {
            sibling.classList.remove(settings.classes.nav.active);
          });
        }
      },
      removeClass: function removeClass(controls) {
        var item = controls[Glide2.index];
        if (item) {
          item.classList.remove(Glide2.settings.classes.nav.active);
        }
      },
      setArrowState: function setArrowState() {
        if (Glide2.settings.rewind) {
          return;
        }
        var next = Controls2._arrowControls.next;
        var previous = Controls2._arrowControls.previous;
        this.resetArrowState(next, previous);
        if (Glide2.index === 0) {
          this.disableArrow(previous);
        }
        if (Glide2.index === Components.Run.length) {
          this.disableArrow(next);
        }
      },
      resetArrowState: function resetArrowState() {
        var settings = Glide2.settings;
        for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
          lists[_key] = arguments[_key];
        }
        lists.forEach(function(list) {
          list.forEach(function(element) {
            element.classList.remove(settings.classes.arrow.disabled);
          });
        });
      },
      disableArrow: function disableArrow() {
        var settings = Glide2.settings;
        for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          lists[_key2] = arguments[_key2];
        }
        lists.forEach(function(list) {
          list.forEach(function(element) {
            element.classList.add(settings.classes.arrow.disabled);
          });
        });
      },
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },
      bind: function bind3(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on("click", elements[i], this.click);
          Binder.on("touchstart", elements[i], this.click, capture);
        }
      },
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(["click", "touchstart"], elements[i]);
        }
      },
      click: function click(event) {
        if (!supportsPassive$1 && event.type === "touchstart") {
          event.preventDefault();
        }
        var direction = event.currentTarget.getAttribute("data-glide-dir");
        Components.Run.make(Components.Direction.resolve(direction));
      }
    };
    define2(Controls2, "items", {
      get: function get3() {
        return Controls2._c;
      }
    });
    Events.on(["mount.after", "move.after"], function() {
      Controls2.setActive();
    });
    Events.on(["mount.after", "run"], function() {
      Controls2.setArrowState();
    });
    Events.on("destroy", function() {
      Controls2.removeBindings();
      Controls2.removeActive();
      Binder.destroy();
    });
    return Controls2;
  }
  function Keyboard(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Keyboard2 = {
      mount: function mount2() {
        if (Glide2.settings.keyboard) {
          this.bind();
        }
      },
      bind: function bind3() {
        Binder.on("keyup", document, this.press);
      },
      unbind: function unbind() {
        Binder.off("keyup", document);
      },
      press: function press(event) {
        var perSwipe = Glide2.settings.perSwipe;
        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
        }
        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        }
      }
    };
    Events.on(["destroy", "update"], function() {
      Keyboard2.unbind();
    });
    Events.on("update", function() {
      Keyboard2.mount();
    });
    Events.on("destroy", function() {
      Binder.destroy();
    });
    return Keyboard2;
  }
  function Autoplay(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Autoplay2 = {
      mount: function mount2() {
        this.enable();
        this.start();
        if (Glide2.settings.hoverpause) {
          this.bind();
        }
      },
      enable: function enable() {
        this._e = true;
      },
      disable: function disable() {
        this._e = false;
      },
      start: function start2() {
        var _this = this;
        if (!this._e) {
          return;
        }
        this.enable();
        if (Glide2.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function() {
              _this.stop();
              Components.Run.make(">");
              _this.start();
              Events.emit("autoplay");
            }, this.time);
          }
        }
      },
      stop: function stop2() {
        this._i = clearInterval(this._i);
      },
      bind: function bind3() {
        var _this2 = this;
        Binder.on("mouseover", Components.Html.root, function() {
          if (_this2._e) {
            _this2.stop();
          }
        });
        Binder.on("mouseout", Components.Html.root, function() {
          if (_this2._e) {
            _this2.start();
          }
        });
      },
      unbind: function unbind() {
        Binder.off(["mouseover", "mouseout"], Components.Html.root);
      }
    };
    define2(Autoplay2, "time", {
      get: function get3() {
        var autoplay = Components.Html.slides[Glide2.index].getAttribute("data-glide-autoplay");
        if (autoplay) {
          return toInt(autoplay);
        }
        return toInt(Glide2.settings.autoplay);
      }
    });
    Events.on(["destroy", "update"], function() {
      Autoplay2.unbind();
    });
    Events.on(["run.before", "swipe.start", "update"], function() {
      Autoplay2.stop();
    });
    Events.on(["pause", "destroy"], function() {
      Autoplay2.disable();
      Autoplay2.stop();
    });
    Events.on(["run.after", "swipe.end"], function() {
      Autoplay2.start();
    });
    Events.on(["play"], function() {
      Autoplay2.enable();
      Autoplay2.start();
    });
    Events.on("update", function() {
      Autoplay2.mount();
    });
    Events.on("destroy", function() {
      Binder.destroy();
    });
    return Autoplay2;
  }
  function sortBreakpoints(points) {
    if (isObject2(points)) {
      return sortKeys(points);
    } else {
      warn2("Breakpoints option must be an object");
    }
    return {};
  }
  function Breakpoints(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var settings = Glide2.settings;
    var points = sortBreakpoints(settings.breakpoints);
    var defaults2 = Object.assign({}, settings);
    var Breakpoints2 = {
      match: function match(points2) {
        if (typeof window.matchMedia !== "undefined") {
          for (var point in points2) {
            if (points2.hasOwnProperty(point)) {
              if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
                return points2[point];
              }
            }
          }
        }
        return defaults2;
      }
    };
    Object.assign(settings, Breakpoints2.match(points));
    Binder.on("resize", window, throttle2(function() {
      Glide2.settings = mergeOptions(settings, Breakpoints2.match(points));
    }, Glide2.settings.throttle));
    Events.on("update", function() {
      points = sortBreakpoints(points);
      defaults2 = Object.assign({}, settings);
    });
    Events.on("destroy", function() {
      Binder.off("resize", window);
    });
    return Breakpoints2;
  }
  var COMPONENTS = {
    Html,
    Translate,
    Transition,
    Direction,
    Peek,
    Sizes,
    Gaps,
    Move,
    Clones,
    Resize,
    Build,
    Run,
    Swipe,
    Images,
    Anchors,
    Controls,
    Keyboard,
    Autoplay,
    Breakpoints
  };
  var Glide = /* @__PURE__ */ function(_Core) {
    _inherits(Glide2, _Core);
    var _super = _createSuper(Glide2);
    function Glide2() {
      _classCallCheck(this, Glide2);
      return _super.apply(this, arguments);
    }
    _createClass(Glide2, [{
      key: "mount",
      value: function mount2() {
        var extensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return _get(_getPrototypeOf(Glide2.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
      }
    }]);
    return Glide2;
  }(Glide$1);

  // node_modules/@glidejs/glide/src/utils/dom.js
  function siblings2(node) {
    if (node && node.parentNode) {
      let n = node.parentNode.firstChild;
      let matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }
      return matched;
    }
    return [];
  }

  // resources/js/app.js
  var import_choices = __toModule(require_choices());
  window.Alpine = module_default;
  module_default.plugin(module_default2);
  module_default.start();
  var CustomActiveClass = (Glide2, Components, Events) => {
    const Component = {
      mount() {
        this.changeActiveSlide();
      },
      changeActiveSlide() {
        const slide = Components.Html.slides[Glide2.index];
        const bullets = Components.Controls.items[1];
        const bullet = [...bullets.children].find((bullet2) => bullet2.getAttribute("data-glide-dir") === `=${Glide2.index}`);
        bullet.classList.remove("is-next", "is-prev");
        bullet.classList.add("is-active");
        slide.classList.remove("is-next", "is-prev");
        slide.classList.add("is-active");
        siblings2(slide).forEach((sibling) => {
          sibling.classList.remove("is-active", "is-next", "is-prev");
        });
        siblings2(bullet).forEach((sibling) => {
          sibling.classList.remove("is-active", "is-next", "is-prev");
        });
        if (slide.nextElementSibling) {
          slide.nextElementSibling.classList.add("is-next");
        }
        if (slide.previousElementSibling) {
          slide.previousElementSibling.classList.add("is-prev");
        }
        if (bullet.nextElementSibling) {
          bullet.nextElementSibling.classList.add("is-next");
        }
        if (bullet.previousElementSibling) {
          bullet.previousElementSibling.classList.add("is-prev");
        }
      }
    };
    Events.on("run", () => {
      Component.changeActiveSlide();
    });
    return Component;
  };
  if (document.getElementsByClassName("hero-slider").length > 0) {
    new Glide(".hero-slider", {
      type: "slider",
      startAt: 0,
      perView: 1
    }).mount({ CustomActiveClass });
  }
  if (document.getElementsByClassName("testimonial-slider").length > 0) {
    new Glide(".testimonial-slider", {
      type: "slider",
      startAt: 0,
      perView: 1,
      gap: 24
    }).mount({
      CustomActiveClass
    });
  }
  if (document.getElementsByClassName("blog-slider").length > 0) {
    new Glide(".blog-slider", {
      type: "slider",
      startAt: 0,
      perView: 3,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2
        },
        640: {
          perView: 1
        }
      }
    }).mount({ CustomActiveClass });
  }
})();
/*!
 * Glide.js v3.5.2
 * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
/*!
* focus-trap 6.6.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
/*! choices.js v10.1.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
