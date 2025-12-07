import {Award, Calendar, FileText} from "lucide-react";
import React from "react";

export const Especialidades = ({formatDate, contractor}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-800">
                    Especialidades y Evaluación
                </h3>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-slate-600 text-sm mb-3 font-semibold">
                        Especialidades Certificadas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {contractor.especialidades.map((esp, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold"
                            >
                          {esp}
                        </span>
                        ))}
                    </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-slate-600" />
                        <p className="text-slate-600 text-sm">Última Evaluación</p>
                    </div>
                    <p className="text-lg font-bold text-slate-800">
                        {formatDate(contractor.fecha_ultima_evaluacion)}
                    </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-slate-600" />
                            <p className="text-slate-600 text-sm">Sanciones Activas</p>
                        </div>
                        <span className={`text-2xl font-bold ${
                            contractor.sanciones_activas === 0
                                ? 'text-green-600'
                                : 'text-red-600'
                        }`}>
                        {contractor.sanciones_activas}
                      </span>
                    </div>
                </div>
            </div>
        </div>
    );
}