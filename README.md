# Solid Principal

The SOLID principles are a set of five design principles that help developers write scalable, maintainable, and robust software.

1.  Single Responsibility Principle (SRP).
    => A class (or component) should have only one reason to change.
2.  Open/Closed Principle (OCP).
    =>You should be able to add new functionality without modifying existing code.
    =>Use composition and props instead of modifying existing logic.
3.  Liskov Substitution Principle (LSP).
    => Objects of a subclass should be able to replace objects of the parent class without altering functionality.
    => Derived (child) components should be interchangeable with their base (parent) components without breaking the app.
    => Helps avoid unexpected behaviors.
    🔴 Bad Approach (Violates LSP)
    function Animal({ sound }) {
    return <p>{sound}</p>;
    }

    function Dog() {
    return <p>Bark</p>; // Not using props, breaks substitution

    ✅ Good Approach (Follows LSP)
    function Animal({ sound }) {
    return <p>{sound}</p>;
    }

    function Dog() {
    return <Animal sound="Bark" />;
    }

4.  Interface Segregation Principle (ISP).
    => Clients should not be forced to depend on interfaces they do not use.
    => Components should only expose props they need.
    => Avoid bloated props that make components hard to use.
    🔴 Bad Approach (Violates ISP)
    function UserProfile({ name, email, address, phone, age, avatar }) {
    return (

       <div>
       <img src={avatar} alt={name} />
       <h2>{name}</h2>
       <p>{email}</p>
       <p>{address}</p>
       <p>{phone}</p>
       <p>{age}</p>
       </div>
       );
       }

        ✅ Good Approach (Follows ISP)
        Break it into smaller components based on needs:

        function UserAvatar({ name, avatar }) {
        return <img src={avatar} alt={name} />;
        }

        function UserInfo({ name, email }) {
        return (

        <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
        );
        }

5.  Dependency Inversion Principle (DIP)

# Layout Pattern in React.

-> In React, a common way to structure layouts is by using a layout pattern where a parent component (the layout) wraps around different pages or sections of an application. This ensures reusability, consistency, and better code organization.

🏆 Advantages of This Layout Pattern

1. ✅ Reusability: Common elements (Navbar, Sidebar) stay the same.
2. ✅ Better Organization: Separates layout from pages.
3. ✅ Easier Maintenance: Change layout once, affects all pages.

# Container Pattern in React.

-> The Container Pattern in React is a design pattern that separates logic (Container Component) from UI (Presentational Component). This improves reusability, separation of concerns, and testability.

✅ How It Works
Container Component: Handles state, data fetching, and logic.
Presentational Component: Only renders UI based on props.

# Atomic Design Pattern in React

-> Atomic Design is a methodology for designing and organizing UI components in a structured way. It breaks down UI components into five hierarchical levels:

1. Atoms – The smallest building blocks (buttons, inputs, labels).
2. Molecules – Groups of atoms working together (input field with a label and button).
3. Organisms – Groups of molecules forming a meaningful section (a login form).
4. Templates – Page layouts that define structure without real data.
5. Pages – Complete pages with actual content.

Why Use Atomic Design?

1. ✅ Better reusability
2. ✅ Scalable component structure
3. ✅ Clear separation of concerns
4. ✅ Easier to maintain and update

This structure makes your React components modular and reusable across the application. Let me know if you need further modifications! 🚀
