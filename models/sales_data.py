import pandas as pd
from datetime import datetime

def load_sales_data():
    sales_data = [
        {
            "produto": "Smartphone X100",
            "dataVenda": "01/01/2024",
            "quantidadeVendida": 5,
            "precoUnitario": 1200.00,
            "custoProduto": 800.00,
            "metodoPagamento": "Cartão de Crédito",
            "receita": 6000.00,
            "lucro": 2000.00
        },
        # Add other sales data here
    ]
    return pd.DataFrame(sales_data)

def filter_sales_data(df, search='', payment_method='', start_date='', end_date=''):
    filtered_df = df.copy()
    
    if search:
        filtered_df = filtered_df[filtered_df['produto'].str.contains(search, case=False)]
    
    if payment_method:
        filtered_df = filtered_df[filtered_df['metodoPagamento'] == payment_method]
    
    if start_date:
        filtered_df = filtered_df[pd.to_datetime(filtered_df['dataVenda'], format='%d/%m/%Y') >= pd.to_datetime(start_date)]
    
    if end_date:
        filtered_df = filtered_df[pd.to_datetime(filtered_df['dataVenda'], format='%d/%m/%Y') <= pd.to_datetime(end_date)]
    
    return filtered_df.to_dict('records')