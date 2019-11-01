- [ ] Why would you use class component over function components (removing hooks from the question)?
Going the class component route allows you to use setState() and lifecycle hooks.



- [ ] Name three lifecycle methods and their purposes.
Birth/Mounting Phase: Components are built from the ground up, render methods are invoked, and componentDiDMount is called.

Growth/Update Phase: setState can be used for changing component's state data, forcing a call to render. You can use  the method shouldComponentUpdate here to prevent a component from calling render if needed. 

Death/Unmount Phase: Removes the component from the screen and componentWillUnmount is called for clean up.



- [ ] What is the purpose of a custom hook?
It lets you extra component logics to reusable functions.



- [ ] Why is it important to test our apps?
To minimize risks of bugs within our code. It's not optional, and the feature is not finished until it is fully tested.