export default function UserInput ({onEdit, UserInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={UserInput.initialInvestment} onChange={(event) => onEdit(event.target.value, 'initialInvestment')} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={UserInput.annualInvestment} onChange={(event) => onEdit(event.target.value, 'annualInvestment')} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={UserInput.expectedReturn} onChange={(event) => onEdit(event.target.value, 'expectedReturn')} />
        </p>
        <p>
          <label>Duration</label>
            <input type="number" required value={UserInput.duration} onChange={(event) => onEdit(event.target.value, 'duration')} />
        </p>
      </div>
      
    </section>
  );
}