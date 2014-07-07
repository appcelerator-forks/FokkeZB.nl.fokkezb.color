Ext.data.JsonP.Widgets_nlFokkezbColor_controllers_widget({"tagname":"class","name":"Widgets.nlFokkezbColor.controllers.widget","autodetected":{},"files":[{"filename":"widget.js","href":"widget.html#Widgets-nlFokkezbColor-controllers-widget"}],"requires":["Widgets.nlFokkezbColor.lib.convert"],"members":[{"name":"color","tagname":"property","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"property-color","meta":{}},{"name":"convert","tagname":"property","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"property-convert","meta":{}},{"name":"Controller","tagname":"method","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"method-Controller","meta":{}},{"name":"getColor","tagname":"method","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"method-getColor","meta":{}},{"name":"setColor","tagname":"method","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"method-setColor","meta":{}},{"name":"change","tagname":"event","owner":"Widgets.nlFokkezbColor.controllers.widget","id":"event-change","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widgets.nlFokkezbColor.controllers.widget","short_doc":"Exposes a view displaying the HSV color space that can have any size and works\nwith any default system unit. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Widgets.nlFokkezbColor.lib.convert' rel='Widgets.nlFokkezbColor.lib.convert' class='docClass'>Widgets.nlFokkezbColor.lib.convert</a></div><h4>Files</h4><div class='dependency'><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget' target='_blank'>widget.js</a></div></pre><div class='doc-contents'><p>Exposes a view displaying the HSV color space that can have any size and works\nwith any default system unit. By tapping or dragging the user can <a href=\"#!/api/Widgets.nlFokkezbColor.controllers.widget-event-change\" rel=\"Widgets.nlFokkezbColor.controllers.widget-event-change\" class=\"docClass\">change</a> the\nselected color, which will be returned in HSV, RGB and HEX.</p>\n\n<p>Inspired by: <a href=\"\">https://github.com/JigarM/TiColorPicker/</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-color' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-property-color' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-property-color' class='name expandable'>color</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Current color ...</div><div class='long'><p>Current color</p>\n<ul><li><span class='pre'>hsv</span> : Object<div class='sub-desc'><p>Color in HSV</p>\n<ul><li><span class='pre'>h</span> : Number<div class='sub-desc'><p>Hue (0 - 359)</p>\n</div></li><li><span class='pre'>s</span> : Number<div class='sub-desc'><p>Saturation (0 - 100)</p>\n</div></li><li><span class='pre'>v</span> : Number<div class='sub-desc'><p>Value (0 - 100)</p>\n</div></li></ul></div></li><li><span class='pre'>rgb</span> : Object<div class='sub-desc'><p>Color in RGB</p>\n<ul><li><span class='pre'>r</span> : Number<div class='sub-desc'><p>Red (0 - 255)</p>\n</div></li><li><span class='pre'>g</span> : Number<div class='sub-desc'><p>Green (0 - 255)</p>\n</div></li><li><span class='pre'>b</span> : Number<div class='sub-desc'><p>Blue (0 - 255)</p>\n</div></li></ul></div></li><li><span class='pre'>hex</span> : String<div class='sub-desc'><p>Color in HEX</p>\n</div></li><li><span class='pre'>bw</span> : String<div class='sub-desc'><p>Either <code>white</code> or <code>black</code> depending on contrast.</p>\n</div></li></ul></div></div></div><div id='property-convert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-property-convert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-property-convert' class='name expandable'>convert</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The <a href=\"#!/api/Widgets.nlFokkezbColor.lib.convert\" rel=\"Widgets.nlFokkezbColor.lib.convert\" class=\"docClass\">Widgets.nlFokkezbColor.lib.convert</a> library.</p>\n</div><div class='long'><p>The <a href=\"#!/api/Widgets.nlFokkezbColor.lib.convert\" rel=\"Widgets.nlFokkezbColor.lib.convert\" class=\"docClass\">Widgets.nlFokkezbColor.lib.convert</a> library.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-Controller' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-method-Controller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-method-Controller' class='name expandable'>Controller</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor for the widget. ...</div><div class='long'><p>Constructor for the widget.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments passed to the controller, which will be applied to the main view.</p>\n<ul><li><span class='pre'>color</span> : Object|String<div class='sub-desc'><p>The color to set.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-method-getColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-method-getColor' class='name expandable'>getColor</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current color. ...</div><div class='long'><p>Get the current color.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Current <a href=\"#!/api/Widgets.nlFokkezbColor.controllers.widget-property-color\" rel=\"Widgets.nlFokkezbColor.controllers.widget-property-color\" class=\"docClass\">color</a></p>\n</div></li></ul></div></div></div><div id='method-setColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-method-setColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-method-setColor' class='name expandable'>setColor</a>( <span class='pre'>clr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the current color. ...</div><div class='long'><p>Set the current color.</p>\n\n<p>This can be formatted as <a href=\"#!/api/Widgets.nlFokkezbColor.controllers.widget-property-color\" rel=\"Widgets.nlFokkezbColor.controllers.widget-property-color\" class=\"docClass\">color</a> or any of it's properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clr</span> : Object|String<div class='sub-desc'><p>Color to set</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbColor.controllers.widget'>Widgets.nlFokkezbColor.controllers.widget</span><br/><a href='source/widget.html#Widgets-nlFokkezbColor-controllers-widget-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbColor.controllers.widget-event-change' class='name expandable'>change</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the user changes the color. ...</div><div class='long'><p>Fired when the user changes the color.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>Event</p>\n<ul><li><span class='pre'>color</span> : Object<div class='sub-desc'><p>Current <a href=\"#!/api/Widgets.nlFokkezbColor.controllers.widget-property-color\" rel=\"Widgets.nlFokkezbColor.controllers.widget-property-color\" class=\"docClass\">color</a></p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});