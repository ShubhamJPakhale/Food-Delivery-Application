import React from "react";
import ReactDOM from "react-dom/client";
import { component } from "react";
import { Github_url } from "../config";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DeveloperInfo: {
        name: "Dummy",
        bio: "React.js Developer",
        location: "India",
        avatar_url: "",
      },
      track: [
        "React.js",
        "Redux.js",
        "Redux Toolkit",
        "Hooks",
        "Node.js",
        "Swiggy Api",
        "Shimmer UI",
        "Tailwind CSS",
        "User Interface Design",
      ],
    };
  }

  async componentDidMount() {
    const userdata = await fetch(Github_url);
    const userjson = await userdata.json();

    this.setState({
      DeveloperInfo: userjson,
    });
  }

  render() {
    return (
      <div className="flex justify-around md:m-[15px] flex-wrap md:flex-nowrap">
        <div className="bg-orange-50 m-5 h-auto">
          <h1 className="text-center text-black-200 font-bold text-2xl">
            About Me
          </h1>
          <img
            className="w-[250px] h-[250px] rounded-full mx-auto"
            src={this.state.DeveloperInfo.avatar_url}
            alt={this.state.DeveloperInfo.name}
          />
          <div className="font-semibold p-[10px] text-black-300 text-3xl ">
            {this.state.DeveloperInfo.name}
          </div>
          <h2 className="w-[500px] break-words pl-[10px] font-normal text-xl text-black-500">
            {this.state.DeveloperInfo.bio}
          </h2>
          <h3 className="w-[500px] break-words pl-[10px] font-extralight text-lg text-black-700">
            A Enthusiastic FrontEnd Developer who loves to solve the real life
            problem with awesome solution and make life easier with coding
          </h3>
        </div>
        <div className=" m-5 h-auto ">
          <h1 className="text-center text-black-200 font-bold text-2xl m-5 ">
            About This Project{" "}
          </h1>
          <h3 className="text-xl font-medium text-black">
            In this Project i have used swiggy public api for getting restaurant
            data and with the help of{" "}
            <strong className="text-amber-400 font-bold text-2xl">React</strong>{" "}
            i created this whole food junction application
          </h3>
          <h3 className="text-base font-medium text-black">
            {" "}
            Tech track used in this project as follow{" "}
          </h3>
          <ul>
            {this.state.track.map((item, index) => {
              return (
                <li
                  className="text-lg pl-[20px] font-medium text-red-500"
                  key={index}
                >
                  {index + 1}. {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
