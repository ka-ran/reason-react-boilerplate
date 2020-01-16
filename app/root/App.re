module App = {

    [@react.component]
    let make = () => {
        <div>

            /* Works */
            <Component1 />

            /* Error */
            <Component2 />

            /* WORKS */
            /* <Component2 title={Text("Sample Title")} /> */

        </div>
    };
};
