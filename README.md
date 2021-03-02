# Animation hooks

This is a small collection of hooks I have used in some simple projects that required animation. They are centered around tracking of object sizes and mouse coordinates.

## useMouse

Captures mouse coordinates, and returns back an object of the users mouses x and y coordinates.
In

- ref

Returns

- { x, y }

## useWindowDimensions

Reports back the current height and width of the window. This function debounces the window resize event.

Returns

- [height, width]

## useDimensions

Captures the hieght and width of a given ref.

In

- ref

Returns

- [hieght, width]
