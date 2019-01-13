import React, { Component } from "react";
import "./App.css";

export default class AppDragDrop extends Component {
  state = {
    tasks: [
      { name: "Learn Jest", category: "wip", bgcolor: "yellow" },
      { name: "Learn React", category: "wip", bgcolor: "pink" },
      { name: "Learn MongoDB", category: "complete", bgcolor: "skyblue" }
    ]
  };

  onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  onDragOver = e => {
    e.preventDefault();
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };
    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="container-drag">
        <h2 className="header">Drag & Drop Exercise</h2>
        <div className="wip">
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div className="droppable" onDragOver={e => this.onDragOver(e)}>
          <span className="task-header">COMPLETE</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}
