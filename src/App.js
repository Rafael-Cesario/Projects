const complete = JSON.parse(localStorage.getItem("OK")) || [];
const color = "rgb(19 88 150)";
const dayColor = "black";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}
export default App;

const Calendar = () => {
  let monthNumber = [];
  for (let x = 0; x < 12; x++) {
    monthNumber.push(x);
  }

  const year = 2022;

  return (
    <div className="calendar">
      <h1>{year}</h1>
      {monthNumber.map((m) => (
        <Months key={m} year={year} month={m} />
      ))}
    </div>
  );
};

const Months = (props) => {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const month = monthNames[props.month];
  const year = props.year;
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const daysPerMonth = new Date(year, props.month + 1, 0).getDate();
  let days = [];
  for (let x = 1; x <= daysPerMonth; x++) {
    days.push(x);
  }

  const prevDaysWeekPerMonth = new Date(year, props.month, 0).getDay();
  const prevDaysPerMonth = new Date(year, props.month, 0).getDate();
  const prevDays = [];

  for (
    let x = prevDaysPerMonth - prevDaysWeekPerMonth;
    x <= prevDaysPerMonth;
    x++
  ) {
    prevDays.push(x);
  }

  const nextDays = [];
  const nextDaysMonth = new Date(year, props.month + 1, 0).getDay();
  for (let x = 1; x <= 6 - nextDaysMonth; x++) {
    nextDays.push(x);
  }

  const save = (dados) => {
    localStorage.setItem("OK", JSON.stringify(dados));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const span = e.target;
    const okDay = span.getAttribute("id");
    const exist = complete.indexOf(okDay);

    if (exist === -1) {
      span.style.backgroundColor = color;
      complete.push(okDay);
      console.log("add azul");
    } else {
      complete.splice(exist, 1);
      span.style.backgroundColor = dayColor;
      console.log("r azul");
    }
    save(complete);
  };

  return (
    <div className="month">
      <h1>{month}</h1>
      <div className="week">
        {weekDays.map((d, i) => (
          <h2 key={d + i}>{d}</h2>
        ))}
      </div>
      <div className="days">
        {prevDays.map((d) => (
          <span
            className="days prev"
            id={month + d + "Prev" + year}
            key={month + d + "Prev"}
            onClick={(e) => handleClick(e)}
          >
            {d}
          </span>
        ))}

        {days.map((d) => (
          <span
            className="days"
            id={month + d + year}
            key={month + d}
            onClick={(e) => handleClick(e)}
          >
            {d}
          </span>
        ))}

        {nextDays.map((d) => (
          <span
            className="days prev"
            id={month + d + "Next" + year}
            key={month + d + "Next"}
            onClick={(e) => handleClick(e)}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

window.onload = () => {
  for (let x = 0; x < complete.length; x++) {
    const elem = document.querySelector("#" + complete[x]);
    elem.style.backgroundColor = color;
  }
};
