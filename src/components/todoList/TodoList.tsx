import "./todoList.css";
import { type TodoItem, type TodoList } from "../../types";
import { useEffect, useRef, useState } from "react";
import { addToDo } from "../../features/addTodo";
import { toggleTaskCompleted } from "../../features/toggleAddToDo";
type TodoOption = {
  type: "general" | "completed" | "inCompleted";
};
interface TodoItemProp extends TodoItem {
  toggleCompleted: () => void;
}
function TodoItem({ task, completed, toggleCompleted, id }: TodoItemProp) {
  return (
    <div className="todo_item__container">
      <div className="checkbox-wrapper">
        <input
          className="checkbox-input"
          id={`checkBox-${id}`}
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted?.()}
        />
        <label htmlFor={`checkBox-${id}`} className="checkbox-custom" />
      </div>
      <p
        style={{ position: "relative", lineHeight: 1.4 }}
        className={`${completed ? "inactiveTask line-through" : "activeTask"} `}
      >
        {task}
      </p>
    </div>
  );
}
export default function TodoList() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [taskList, setTaskList] = useState<TodoItem[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<TodoOption>({
    type: "general",
  });

  useEffect(() => {
    if (taskList) {
      switch (selectedOption.type) {
        case "general":
          break;
      }
    }
  }, [selectedOption]);

  const [inputValue, setInputValue] = useState("");

  const [completed, setCompleted] = useState<TodoItem[] | null>(null);
  const [inCompleted, setInCompleted] = useState<TodoItem[] | null>(null);

  useEffect(() => {
    if (taskList !== null) {
      const completedList: TodoItem[] = [];
      const inCompletedList: TodoItem[] = [];
      for (let i = 0; i < taskList.length; i++) {
        taskList[i].completed
          ? completedList.push(taskList[i])
          : inCompletedList.push(taskList[i]);
      }
      setCompleted(completedList);
      setInCompleted(inCompletedList);
    }
  }, [taskList]);

  const generalRender = taskList?.map((item: TodoItem) => {
    return (
      <TodoItem
        id={item.id}
        key={item.id}
        task={item.task}
        completed={item.completed}
        toggleCompleted={() => toggleTaskCompleted(item.id, setTaskList)}
      ></TodoItem>
    );
  });
  const completedRender = completed?.map((item: TodoItem, index) => {
    return (
      <TodoItem
        id={item.id}
        key={index}
        task={item.task}
        completed={item.completed}
        toggleCompleted={() => toggleTaskCompleted(item.id, setTaskList)}
      ></TodoItem>
    );
  });
  const InCompltedRender = inCompleted?.map((item: TodoItem, index) => {
    return (
      <TodoItem
        id={item.id}
        key={index}
        task={item.task}
        completed={item.completed}
        toggleCompleted={() => toggleTaskCompleted(item.id, setTaskList)}
      ></TodoItem>
    );
  });
  const renderSelected = () => {
    return selectedOption.type === "general" ? (
      taskList && taskList?.length > 0 ? (
        generalRender
      ) : (
        <p>Your todo list is empty</p>
      )
    ) : selectedOption.type === "completed" ? (
      completed && completed.length > 0 ? (
        completedRender
      ) : (
        <p>Your completed list is empty</p>
      )
    ) : selectedOption.type === "inCompleted" ? (
      inCompleted && inCompleted.length > 0 ? (
        InCompltedRender
      ) : (
        <p>Your active todo is empty</p>
      )
    ) : (
      <p>Error</p>
    );
  };
  const renderList = renderSelected();

  return (
    <div className="todo__container">
      <h1
        style={{
          color: "rgba(151, 68, 68, 0.69)",
          fontSize: 90,
          fontFamily: "Segoe Ui",
          fontWeight: 300,
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        todos
      </h1>
      <div className="todo_list__wrapper">
        <p
          style={{
            color: "#a6a6a6",
            padding: "0px 10px",
            height: 50,
            fontSize: 30,
            lineHeight: 1.5,
          }}
        >
          What needs to be done?
        </p>
        <div className="todo_list">{renderList}</div>
        <div
          className="btn__container"
          style={{
            display: "flex",
            gap: 50,
            position: "absolute",
            bottom: 0,
            padding: 20,
          }}
        >
          <p style={{ textWrap: "nowrap" }}>
            {" "}
            {inCompleted ? inCompleted.length : 0} items left
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <button
              className={`${
                selectedOption.type === "general" ? "active" : "inActive"
              }`}
              onClick={() => {
                setSelectedOption({ type: "general" });
              }}
            >
              All
            </button>
            <button
              className={`${
                selectedOption.type === "inCompleted" ? "active" : "inActive"
              }`}
              onClick={() => {
                setSelectedOption({ type: "inCompleted" });
              }}
            >
              Active
            </button>
            <button
              className={`${
                selectedOption.type === "completed" ? "active" : "inActive"
              }`}
              onClick={() => {
                setSelectedOption({ type: "completed" });
              }}
            >
              Completed
            </button>
          </div>
          <div>
            <button
              style={{ border: "none", backgroundColor: "#fff" }}
              onClick={() => {
                if (taskList) {
                  const clear = taskList.filter(
                    (item) => item.completed == false
                  );
                  setTaskList(clear);
                }

                setCompleted([]);
              }}
            >
              Clear completed
            </button>
          </div>
        </div>
      </div>{" "}
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <input
          className="todo-input"
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          type="text"
          value={inputValue}
          placeholder="Enter todo"
        />
        <button
          style={{
            width: 100,
            height: 50,
            borderRadius: "5px",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onClick={() => {
            if (inputValue !== "")
              setTaskList(addToDo(taskList ?? [], inputValue));
            else null;
            setInputValue("");
          }}
        >
          Add todo
        </button>
      </div>
    </div>
  );
}
