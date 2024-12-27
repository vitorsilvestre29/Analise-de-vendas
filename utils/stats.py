def calculate_stats(data):
    if not data:
        return {
            'total_revenue': 0,
            'total_profit': 0,
            'total_sales': 0,
            'average_ticket': 0
        }
        
    total_revenue = sum(item['receita'] for item in data)
    total_profit = sum(item['lucro'] for item in data)
    total_sales = sum(item['quantidadeVendida'] for item in data)
    average_ticket = total_revenue / total_sales if total_sales > 0 else 0
    
    return {
        'total_revenue': total_revenue,
        'total_profit': total_profit,
        'total_sales': total_sales,
        'average_ticket': average_ticket
    }