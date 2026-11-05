import { Activity, Check, Circle, Clock3, Coffee, Dumbbell, Plus, Salad } from "lucide-react";

function FitnessVisual() {
  return (
    <div className="visual-window fitness-window" aria-hidden="true">
      <div className="visual-topbar"><i /><i /><i /><span>TRACKMYFIT</span></div>
      <div className="fitness-body">
        <div className="visual-greeting">Your week, in motion<span>Small steps count.</span></div>
        <div className="fitness-stats">
          <div><Activity size={15} /><strong>Move</strong><span>Stay active</span></div>
          <div><Dumbbell size={15} /><strong>Train</strong><span>Find your pace</span></div>
        </div>
        <div className="fitness-line"><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="visual-caption"><span>YOUR WEEK</span><span>MON — SUN</span></div>
      </div>
    </div>
  );
}

function RestaurantVisual() {
  return (
    <div className="visual-window restaurant-window" aria-hidden="true">
      <div className="visual-topbar"><i /><i /><i /><span>ZAIKA EXPRESS</span></div>
      <div className="restaurant-body">
        <div className="restaurant-copy">
          <span>GOOD FOOD, GOOD MOOD</span>
          <strong>A little joy<br />on your plate.</strong>
          <div className="menu-cta">Explore menu <span>↗</span></div>
        </div>
        <div className="meal-art"><Salad size={42} strokeWidth={1.2} /><span>fresh<br />& easy</span></div>
        <div className="restaurant-note"><Coffee size={14} /> A table for your cravings</div>
      </div>
    </div>
  );
}

function TodoVisual() {
  return (
    <div className="visual-window todo-window" aria-hidden="true">
      <div className="visual-topbar"><i /><i /><i /><span>little list</span></div>
      <div className="todo-body">
        <div className="todo-heading">A clear mind<br /><em>starts here.</em></div>
        <div className="todo-item done"><span><Check size={12} /></span>Plan the week<small>Done</small></div>
        <div className="todo-item"><Circle size={15} />Work on a project<small>Today</small></div>
        <div className="todo-item"><Circle size={15} />Read something new<small>Later</small></div>
        <div className="todo-add"><Plus size={14} /> Add a task</div>
      </div>
    </div>
  );
}

function ChartVisual() {
  return (
    <div className="visual-window chart-window">
      <div className="visual-topbar"><i /><i /><i /><span>WORKBOOK SNAPSHOT</span></div>
      <img
        src={`${import.meta.env.BASE_URL}images/social-media-impact-chart.png`}
        alt="Gender distribution chart embedded in the social media impact workbook"
        loading="lazy"
        width="501"
        height="371"
      />
      <span className="chart-caption"><Clock3 size={13} /> Supplied spreadsheet visual</span>
    </div>
  );
}

export default function ProjectVisual({ type, label }) {
  return (
    <div
      className={`project-visual project-visual-${type}`}
      role={type === "chart" ? undefined : "img"}
      aria-label={type === "chart" ? undefined : label}
    >
      {type === "fitness" ? <FitnessVisual /> : null}
      {type === "restaurant" ? <RestaurantVisual /> : null}
      {type === "todo" ? <TodoVisual /> : null}
      {type === "chart" ? <ChartVisual /> : null}
    </div>
  );
}
