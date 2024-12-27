from flask import jsonify, request
from models.sales_data import load_sales_data, filter_sales_data

def register_routes(app):
    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/api/sales')
    def get_sales():
        search = request.args.get('search', '')
        payment_method = request.args.get('payment_method', '')
        start_date = request.args.get('start_date', '')
        end_date = request.args.get('end_date', '')

        data = load_sales_data()
        filtered_data = filter_sales_data(data, search, payment_method, start_date, end_date)
        
        return jsonify(filtered_data)