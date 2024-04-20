import Confetti from "react-confetti";

export default function ConfettiComponent({ tenzies }) {
    return tenzies ? <Confetti /> : null;
}