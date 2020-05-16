import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        console.log("fetching data");
        this.setState({ options });
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({
      selectedOption: option
    })
  }

  handleClearSelectedOption = () => {
    this.setState({
      selectedOption: undefined
    })
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
