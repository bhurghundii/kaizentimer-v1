import styles from "./alert.module.css";

export default function Timer() {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl"></span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl"></span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl"></span>
          sec
        </div>
        <div>
          <span className="countdown font-mono text-4xl"></span>
          👾
        </div>
        <div>
          <span className="countdown font-mono text-4xl"></span>
          Start
        </div>
        <div>
          <span className="countdown font-mono text-4xl"></span>
          Edit
        </div>
      </div>
    </div>
  );
}
