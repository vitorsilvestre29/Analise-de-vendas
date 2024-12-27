import React from 'react';
import { Stats } from './components/Stats';
import { Filters } from './components/Filters';
import { SalesTable } from './components/SalesTable';
import { salesData } from './data/salesData';
import { useFilters } from './hooks/useFilters';

function App() {
  const {
    filters,
    setSearch,
    setPaymentMethod,
    setDateRange,
    filteredData
  } = useFilters(salesData);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard de Vendas</h1>
          <p className="mt-2 text-gray-600">Visão geral do desempenho de vendas</p>
        </div>

        <Filters
          search={filters.search}
          paymentMethod={filters.paymentMethod}
          dateRange={filters.dateRange}
          onSearchChange={setSearch}
          onPaymentMethodChange={setPaymentMethod}
          onDateRangeChange={setDateRange}
        />

        <Stats data={filteredData} />

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Histórico de Vendas</h2>
          <SalesTable data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;