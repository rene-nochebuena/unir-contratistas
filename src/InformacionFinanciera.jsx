import {DollarSign} from "lucide-react";
import {Especialidades} from "./Especialidades.jsx";
import React from "react";

export const InformacionFinanciera = ({formatDate, formatCurrency, contractor}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-slate-800">
                        Información Financiera
                    </h3>
                </div>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-slate-600 text-sm mb-1">Monto Total Ejecutado</p>
                        <p className="text-2xl font-bold text-slate-800">
                            {formatCurrency(contractor.monto_total_ejecutado)}
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-slate-600 text-sm mb-1">Capacidad de Contratación</p>
                        <p className="text-2xl font-bold text-slate-800">
                            {formatCurrency(contractor.capacidad_contratacion)}
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-slate-600 text-sm mb-1">Calificación Financiera</p>
                        <p className="text-3xl font-bold text-blue-600">
                            {contractor.calificacion_financiera}
                        </p>
                    </div>
                </div>
            </div>

            {/* Specialties and Status */}
            <Especialidades formatDate={formatDate} contractor={contractor} />
        </div>
    );
}