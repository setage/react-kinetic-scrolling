# React Kinetic Scrolling

> **Attention!** Active development in progress

React component which handle scrolling by mouse drag and wheel, with kinetic effect (like in mobile interfaces).

**Features:**
- vertical and horizontal scrolling
- snap to grid feature
- mouse wheel scrolling

##Properties:

Property | Type | Description
-------- | ------ | -----------
children | array, string | Accepts simple text or array of elements.
snap | number | Determines width of grid cell and enables "snap to grid" feature.
horizontal | bool | Vertical scrolling enabled by default. Set this property to make scrolling horizontally.
className | string | Adding custom styling for root div of the component

##Methods:

`scrollToItem(idx)` --- Scrolls to item of passed index. Returns `false` if snap feature disabled.

`atBegin()` --- Returns `true` if scrolling at the beginning (offset = 0).

`atEnd()` --- Returns `true` if scrolling at the end (offset = max).


Used https://github.com/ariya/kinetic/ for kinetic effect calculations.
