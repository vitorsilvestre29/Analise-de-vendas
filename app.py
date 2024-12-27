from flask import Flask, render_template
from routes import register_routes
from models.sales_data import load_sales_data

app = Flask(__name__)
register_routes(app)

if __name__ == '__main__':
    app.run(debug=True)