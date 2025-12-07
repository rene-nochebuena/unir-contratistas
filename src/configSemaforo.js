import {AlertCircle, CheckCircle, XCircle} from "lucide-react";

export const getSemaforoConfig = (semaforo) => {
    const configs = {
        excelente: {
            color: 'bg-green-500',
            textColor: 'text-green-700',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            label: 'EXCELENTE',
            icon: CheckCircle
        },
        buena: {
            color: 'bg-blue-500',
            textColor: 'text-blue-700',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            label: 'BUENA',
            icon: CheckCircle
        },
        mediana: {
            color: 'bg-yellow-500',
            textColor: 'text-yellow-700',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            label: 'MEDIANA',
            icon: AlertCircle
        },
        mala: {
            color: 'bg-red-500',
            textColor: 'text-red-700',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
            label: 'DEFICIENTE',
            icon: XCircle
        }
    };
    return configs[semaforo] || configs.mediana;
};