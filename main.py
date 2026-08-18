from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI(title='Free Fire Store API',version='0.1.0')
app.add_middleware(CORSMiddleware,allow_origins=['*'],allow_credentials=True,allow_methods=['*'],allow_headers=['*'])
@app.get('/api/health')
def health(): return {'status':'ok','service':'freefire-store-api','version':'0.1.0'}
@app.get('/api/products')
def products(): return [{'id':1,'diamonds':100,'price':10},{'id':2,'diamonds':310,'price':25},{'id':3,'diamonds':520,'price':40},{'id':4,'diamonds':1060,'price':75},{'id':5,'diamonds':2180,'price':145},{'id':6,'diamonds':5600,'price':350},{'id':7,'diamonds':10000,'price':600}]