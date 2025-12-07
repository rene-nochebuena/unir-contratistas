import {Briefcase} from "lucide-react";
import React from "react";

export const Proyectos = ({contractor}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <Briefcase className="w-10 h-10 text-blue-600"/>
                <span className="text-3xl font-bold text-slate-800">
                    {contractor.proyectos_completados}
                  </span>
            </div>
            <p className="text-slate-600 font-semibold">Proyectos Completados</p>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{width: `${Math.min(contractor.proyectos_completados / 2, 100)}%`}}
                ></div>
            </div>
        </div>
    );
}