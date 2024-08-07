function calculatePoints() {
    const ramMultiplier = parseFloat(document.getElementById('ram').value);
    const cpuMultiplier = parseFloat(document.getElementById('cpu').value);
    const internetSpeedMultiplier = parseFloat(document.getElementById('internetSpeed').value);
    const diskTypeMultiplier = parseFloat(document.getElementById('diskType').value);
    const diskCapacity = parseFloat(document.getElementById('diskCapacity').value);

    const basePoints = ramMultiplier * cpuMultiplier * internetSpeedMultiplier * (diskCapacity / 10) * diskTypeMultiplier;
    const pointsFirst24Hours = Math.min(basePoints * 0.8, 450);
    const pointsAfter24Hours = basePoints > 562.5 ? 562.5 : basePoints;

    const resultMessage = basePoints * 0.8 > 450 ? 
        `Due to the maximum point limit, your points for the first 24 hours will be capped at 450.` :
        ``;

    document.getElementById('result').innerHTML = `
        For the first 24 hours, your client will earn <strong>${pointsFirst24Hours.toFixed(2)}</strong> points per hour. 
        After 24 hours, your points will be <strong>${pointsAfter24Hours.toFixed(2)}</strong> points per hour.
        <br>${resultMessage}
    `;
}
