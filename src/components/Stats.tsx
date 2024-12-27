import React from 'react';
import { DashboardCard } from './DashboardCard';
import { SaleItem } from '../types/sales';
import { BarChart3, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

interface StatsProps {
  data: SaleItem[];
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  const totalRevenue = data.reduce((acc, item) => acc + item.receita, 0);
  const totalProfit = data.reduce((acc, item) => acc + item.lucro, 0);
  const totalSales = data.reduce((acc, item) => acc + item.quantidadeVendida, 0);
  const averageTicket = totalRevenue / totalSales || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <DashboardCard
        title="Receita Total"
        value={`R$ ${totalRevenue.toFixed(2)}`}
        icon={<DollarSign />}
        trend={12}
      />
      <DashboardCard
        title="Lucro Total"
        value={`R$ ${totalProfit.toFixed(2)}`}
        icon={<TrendingUp />}
        trend={8}
      />
      <DashboardCard
        title="Total de Vendas"
        value={totalSales.toString()}
        icon={<ShoppingCart />}
        trend={5}
      />
      <DashboardCard
        title="Ticket Médio"
        value={`R$ ${averageTicket.toFixed(2)}`}
        icon={<BarChart3 />}
        trend={-2}
      />
    </div>
  );
};