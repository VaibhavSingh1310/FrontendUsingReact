import { useState } from "react";
export default function Form() {
const [address, setAddress] = useState("");
function handleSubmit(e) {
    e.preventDefault();
    setAddress("");
    alert("Hinokami Kagura")
}
return (
    <form onSubmit={handleSubmit}>
    <h3>Enter Address</h3>
    <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
    />
    <button type="submit">Save Address</button>
    </form>
);
}