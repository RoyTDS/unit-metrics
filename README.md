# Metric Tracker

A Metric tracking system that supports different units and provides APIs for users to manage metrics data.

## Project Overview

This project allows users to track various metrics, including:

- **Distance** (Meter, Centimeter, Inch, Feet, Yard)
- **Temperature** (Celsius, Fahrenheit, Kelvin)

Users can:

- Add new metrics with a date, value, and unit.
- Fetch a list of metrics based on their type (Distance or Temperature).
- Get data for drawing charts, considering the latest metric inserted for a given day, based on a specified time period (1 Month, 2 Months).
- Convert units when specified by the user (e.g., converting meters to feet, Celsius to Fahrenheit, etc.).

## Technologies Used

- **Node.js** (Backend)
- **Express.js** (API framework)
- **MongoDB** (Database)
- **TypeScript** (For type safety)
- **Jest** (For testing)

## Setup and Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (or a cloud MongoDB service like Atlas)

### Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/RoyTDS/unit-metrics.git 


### Postman

{
	"info": {
		"_postman_id": "201a7875-c55c-48fc-9618-596e290d7c1c",
		"name": "Metric Tracker API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "42544704"
	},
	"item": [
		{
			"name": "Add Metric (Distance)",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": \"u001\",\n  \"type\": \"distance\",\n  \"value\": 10,\n  \"unit\": \"meter\",\n  \"date\": \"2025-04-18T10:00:00Z\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/metrics",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add Metric (Temperature)",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": \"u001\",\n  \"type\": \"temperature\",\n  \"value\": 37,\n  \"unit\": \"celsius\",\n  \"date\": \"2025-04-18T12:00:00Z\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/metrics",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Distance Metrics",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/metrics?type=distance&userId=u001",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics"
					],
					"query": [
						{
							"key": "type",
							"value": "distance"
						},
						{
							"key": "userId",
							"value": "u001"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Temperature Metrics",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/metrics?type=temperature&userId=u001",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics"
					],
					"query": [
						{
							"key": "type",
							"value": "temperature"
						},
						{
							"key": "userId",
							"value": "u001"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Chart Data (Last 1 month)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/metrics/chart?type=distance&months=1&userId=u001",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics",
						"chart"
					],
					"query": [
						{
							"key": "type",
							"value": "distance"
						},
						{
							"key": "months",
							"value": "1"
						},
						{
							"key": "userId",
							"value": "u001"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Chart Data with Unit Conversion (feet)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/metrics/chart?type=distance&months=2&unit=feet&userId=u001",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics",
						"chart"
					],
					"query": [
						{
							"key": "type",
							"value": "distance"
						},
						{
							"key": "months",
							"value": "2"
						},
						{
							"key": "unit",
							"value": "feet"
						},
						{
							"key": "userId",
							"value": "u001"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete by ID",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/metrics/68033de7d387a1e0809c9aab",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics",
						"68033de7d387a1e0809c9aab"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"value\": 75,\r\n  \"unit\": \"meter\",\r\n  \"date\": \"2025-04-15\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/metrics/680343b6bd9ee9cbd1faeec8",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"metrics",
						"680343b6bd9ee9cbd1faeec8"
					]
				}
			},
			"response": []
		}
	]
}