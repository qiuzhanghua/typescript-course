import * as React from "react";

interface HomeProps {
    name: string,
    age: number;
}

export class Home  extends React.Component<HomeProps, {}> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
          <div>
              Hello there, {this.props.name}, you are {this.props.age}, right?
          </div>
        );
    }
}