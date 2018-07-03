# vector_functions.js
A set of functions to manipulate vectors in javascript
## Functions

<dl>
<dt><a href="#add">add(vector)</a></dt>
<dd><p>This function adds all the given vectors,
this function can take multiple vectors and add them</p>
</dd>
<dt><a href="#sub">sub(Vector)</a></dt>
<dd><p>This function subtracts all the given vectors</p>
</dd>
<dt><a href="#mult">mult(vector, scalar)</a></dt>
<dd><p>This function multiplies the vector given by the scalar give</p>
</dd>
<dt><a href="#inverse">inverse(vector)</a></dt>
<dd><p>This function returns the inverse of the vector</p>
</dd>
<dt><a href="#normalize">normalize(vector)</a></dt>
<dd><p>This function normalise the vector</p>
</dd>
<dt><a href="#distance">distance(vector1, vector2)</a></dt>
<dd><p>Returns the magnitude of the distance between the two vectors given</p>
</dd>
<dt><a href="#copy">copy(vector)</a></dt>
<dd><p>Returns a copy of the given vector</p>
</dd>
<dt><a href="#limit">limit(vector, scalar)</a></dt>
<dd><p>Limits the magnitud of the given vector</p>
</dd>
<dt><a href="#dot">dot(vector1, vector2)</a></dt>
<dd><p>This function returns the dot product of the two vectors given</p>
</dd>
<dt><a href="#mag">mag(vector)</a></dt>
<dd><p>This functions returns the margnitud of the given vector</p>
</dd>
<dt><a href="#moveTowards">moveTowards(start, end, speed, stop)</a></dt>
<dd><p>Moves the first vector given to the second vector given
with the given speed and wont move if the magnitude of the distance is
smaller than the stop parameter.</p>
</dd>
<dt><a href="#angleBetween">angleBetween(vector1, vector2)</a></dt>
<dd><p>Returns the angle between 2 vectors</p>
</dd>
<dt><a href="#setMag">setMag(vector, scalar)</a></dt>
<dd><p>Sets the magnitud of the vector to the length of the scalar given</p>
</dd>
<dt><a href="#toDegree">toDegree(radian)</a></dt>
<dd><p>Converts a number from radian to degree</p>
</dd>
<dt><a href="#toRadian">toRadian(degree)</a></dt>
<dd><p>Converts a number from degree to radian</p>
</dd>
<dt><a href="#cross3d">cross3d(vector1, vector2)</a></dt>
<dd><p>Returns the cross product of 2 vectors with 3 components</p>
</dd>
<dt><a href="#cross2d">cross2d(vector1, vector2)</a></dt>
<dd><p>Returns the cross product of 2 vectors with 2 components</p>
</dd>
<dt><a href="#angle">angle(vector)</a></dt>
<dd><p>Returns the angle of the vector</p>
</dd>
<dt><a href="#angleMagnitude">angleMagnitude(direction, magnitud)</a></dt>
<dd><p>Creates a vector from a magnitud and a direction</p>
</dd>
<dt><a href="#linearIntersect">linearIntersect(vector, angle)</a></dt>
<dd><p>Sets the angle of the given vector to the given angle</p>
</dd>
<dt><a href="#addAngle">addAngle(vector, angle, piv)</a></dt>
<dd><p>Adds the angle of the given vector to the given angle</p>
</dd>
<dt><a href="#setAngle">setAngle(vector, angle)</a></dt>
<dd><p>Sets the angle of the given vector to the given angle</p>
</dd>
</dl>

<a name="add"></a>

## add(vector)
this function can take multiple vectors and add them

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Array</code> | This is an array of components of a vector |

**Example**
```js
add([5, 15], [15, 5])
```
**Example**
```js
add([5, 5], [10, 10], [5, 5])
```
<a name="sub"></a>

## sub(Vector)
This function subtracts all the given vectors

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| Vector | <code>Array</code> | takes multiple vectors and subtracts them |

<a name="mult"></a>

## mult(vector, scalar)
This function multiplies the vector given by the scalar give

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Array</code> | This is an array of components of a vector |
| scalar | <code>Number</code> | This is a number |

<a name="inverse"></a>

## inverse(vector)
This function returns the inverse of the vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |

<a name="normalize"></a>

## normalize(vector)
This function normalise the vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |

<a name="distance"></a>

## distance(vector1, vector2)
Returns the magnitude of the distance between the two vectors given

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector1 | <code>array</code> | This is an array of components of a vector |
| vector2 | <code>array</code> | This is an array of components of a vector |

<a name="copy"></a>

## copy(vector)
Returns a copy of the given vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |

<a name="limit"></a>

## limit(vector, scalar)
Limits the magnitud of the given vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |
| scalar | <code>array</code> | This is the maximun length of the vector |

<a name="dot"></a>

## dot(vector1, vector2)
This function returns the dot product of the two vectors given

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector1 | <code>array</code> | This is an array of components of a vector |
| vector2 | <code>array</code> | This is an array of components of a vector |

<a name="mag"></a>

## mag(vector)
This functions returns the margnitud of the given vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |

<a name="moveTowards"></a>

## moveTowards(start, end, speed, stop)
smaller than the stop parameter.ve if the magnitude of the distance is

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | <code>array</code> |  | This is an array of components of a vector |
| end | <code>array</code> |  | This is an array of components of a vector |
| speed | <code>number</code> | <code>1</code> | This is the speed in wich the first vector will move towards the second |
| stop | <code>number</code> | <code>1</code> | This is the distance in wich the start vector will not move to the end vector |

<a name="angleBetween"></a>

## angleBetween(vector1, vector2)
Returns the angle between 2 vectors

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector1 | <code>array</code> | This is an array of components of a vector |
| vector2 | <code>array</code> | This is an array of components of a vector |

<a name="setMag"></a>

## setMag(vector, scalar)
Sets the magnitud of the vector to the length of the scalar given

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |
| scalar | <code>number</code> | This will be the length of the vector |

<a name="toDegree"></a>

## toDegree(radian)
Converts a number from radian to degree

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| radian | <code>number</code> | This number represents the radian that you want to convert |

<a name="toRadian"></a>

## toRadian(degree)
Converts a number from degree to radian

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | This number represents the degree that you want to convert |

<a name="cross3d"></a>

## cross3d(vector1, vector2)
Returns the cross product of 2 vectors with 3 components

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector1 | <code>array</code> | This is an array of components of a vector |
| vector2 | <code>array</code> | This is an array of components of a vector |

<a name="cross2d"></a>

## cross2d(vector1, vector2)
Returns the cross product of 2 vectors with 2 components

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector1 | <code>array</code> | This is an array of components of a vector |
| vector2 | <code>array</code> | This is an array of components of a vector |

<a name="angle"></a>

## angle(vector)
Returns the angle of the vector

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is an array of components of a vector |

<a name="angleMagnitude"></a>

## angleMagnitude(direction, magnitud)
Creates a vector from a magnitud and a direction

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| direction | <code>number</code> | This is the direction of the vector that will be created |
| magnitud | <code>number</code> | This is the magnitud of the vector that will be created |

<a name="linearIntersect"></a>

## linearIntersect(vector, angle)
Sets the angle of the given vector to the given angle

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is the vector that will be changed |
| angle | <code>number</code> | This will be the angle of the given vector in radians |

<a name="addAngle"></a>

## addAngle(vector, angle, piv)
Adds the angle of the given vector to the given angle

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is the vector that will be changed |
| angle | <code>number</code> | This will be the angle that will be added to the given vector in radians |
| piv | <code>array</code> | This is the center of rotation |

<a name="setAngle"></a>

## setAngle(vector, angle)
Sets the angle of the given vector to the given angle

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>array</code> | This is the vector that will be changed |
| angle | <code>number</code> | This will be the angle of the given vector in radians |

