import {Users} from "lucide-react";
import React from "react";

export const Personal = ({contractor}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <Users className="w-10 h-10 text-green-600"/>
                <span className="text-3xl font-bold text-slate-800">
                    {contractor.personal_activo}
                  </span>
            </div>
            <p className="text-slate-600 font-semibold">Personal Activo</p>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{width: `${Math.min(contractor.personal_activo / 5, 100)}%`}}
                ></div>
            </div>
        </div>
    );
}