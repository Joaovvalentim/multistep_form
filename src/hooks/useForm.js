import { useState } from "react";

export function useForm(steps) {
    // Estado para armazenar o passo atual
    const [currentStep, setCurrentStep] = useState(0);

    // Função para mudar o passo atual
    function changeStep(i, e) {
        if (e) e.preventDefault();
        if (i < 0 || i >= steps.length) return;
        setCurrentStep(i);
    }

    // Retorna o estado atual, o componente atual e a função para mudar o passo
    return {
        currentStep, // Passo atual
        currentComponent: steps[currentStep], // Componente correspondente ao passo atual
        changeStep, // Função para mudar o passo
        isLastStep: currentStep + 1 === steps.length ? true : false, // if para saber se esta no ultimo passo
        isFirtsStep: currentStep === 0 ? true : false // if para saber se esta no primeiro passo
    };
}