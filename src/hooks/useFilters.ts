import { useState, useMemo } from 'react';
import { SaleItem } from '../types/sales';

export function useFilters(data: SaleItem[]) {
  const [search, setSearch] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: ''
  });

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = item.produto.toLowerCase().includes(search.toLowerCase());
      const matchesPayment = !paymentMethod || item.metodoPagamento === paymentMethod;
      const matchesDate = (!dateRange.start || item.dataVenda >= dateRange.start) &&
                         (!dateRange.end || item.dataVenda <= dateRange.end);
      
      return matchesSearch && matchesPayment && matchesDate;
    });
  }, [data, search, paymentMethod, dateRange]);

  return {
    filters: { search, paymentMethod, dateRange },
    setSearch,
    setPaymentMethod,
    setDateRange,
    filteredData
  };
}