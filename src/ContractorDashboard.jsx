import React, { useState } from 'react';
import {contractorsDB} from "./datosPrueba.js";
import {getSemaforoConfig} from "./configSemaforo.js";
import {Header} from "./Header.jsx";
import {Proyectos} from "./Proyectos.jsx";
import {Personal} from "./Personal.jsx";
import {Experiencia} from "./Experiencia.jsx";
import {Maquinaria} from "./Maquinaria.jsx";
import {Footer} from "./Footer.jsx";
import {InformacionFinanciera} from "./InformacionFinanciera.jsx";



const ContractorDashboard = () => {
  const [searchId, setSearchId] = useState('');
  const [contractor, setContractor] = useState(null);
  const [showError, setShowError] = useState(false);



  const handleSearch = () => {
    const found = contractorsDB.find(c => c.id_contratista === parseInt(searchId));
    if (found) {
      setContractor(found);
      setShowError(false);
    } else {
      setContractor(null);
      setShowError(true);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <Header showError={showError} searchId={searchId} handleSearch={handleSearch} setSearchId={setSearchId} />

        {/* Dashboard Content */}
        {contractor && (
          <div className="space-y-6 animate-fadeIn">
            {/* Status Card with Semaforo */}
            <div className={`rounded-xl shadow-lg p-8 border-2 ${getSemaforoConfig(contractor.semaforo).bgColor} ${getSemaforoConfig(contractor.semaforo).borderColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-24 h-24 rounded-full ${getSemaforoConfig(contractor.semaforo).color} flex items-center justify-center shadow-lg`}>
                    {React.createElement(getSemaforoConfig(contractor.semaforo).icon, {
                      className: "w-12 h-12 text-white"
                    })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                      {contractor.razon_social}
                    </h2>
                    <p className="text-xl text-slate-600 mt-1">
                      {contractor.nombre_comercial}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className={`px-4 py-2 rounded-full font-bold text-sm ${getSemaforoConfig(contractor.semaforo).color} text-white`}>
                        {getSemaforoConfig(contractor.semaforo).label}
                      </span>
                      <span className="text-slate-600">RFC: {contractor.rfc}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-slate-800">
                    {contractor.puntaje_total}
                  </div>
                  <p className="text-slate-600 font-semibold mt-1">
                    Puntuación Total
                  </p>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    contractor.estatus_catalogo === 'AC' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {contractor.estatus_catalogo === 'AC' ? 'ACTIVO' : 'SUSPENDIDO'}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Experiencia contractor={contractor}/>

              <Proyectos contractor={contractor} />

              <Personal contractor={contractor} />

              <Maquinaria contractor={contractor} />
            </div>

            <InformacionFinanciera formatCurrency={formatCurrency} formatDate={formatDate} contractor={contractor} />

            <Footer contractor={contractor} />
          </div>
        )}

        {/* Initial State - Show all contractors */}
        {!contractor && !showError && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contratistas Registrados ({contractorsDB.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contractorsDB.map((c) => {
                const semaforoConfig = getSemaforoConfig(c.semaforo);
                return (
                  <button
                    key={c.id_contratista}
                    onClick={() => {
                      setSearchId(c.id_contratista.toString());
                      setContractor(c);
                      setShowError(false);
                    }}
                    className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-lg ${semaforoConfig.borderColor} ${semaforoConfig.bgColor} hover:scale-105`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${semaforoConfig.color}`}></div>
                      <span className="font-bold text-slate-800">ID: {c.id_contratista}</span>
                    </div>
                    <p className="font-semibold text-slate-800 mb-1">{c.nombre_comercial}</p>
                    <p className="text-sm text-slate-600 mb-2">{c.razon_social}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${semaforoConfig.color} text-white`}>
                        {semaforoConfig.label}
                      </span>
                      <span className="text-sm font-bold text-slate-700">{c.puntaje_total}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractorDashboard;