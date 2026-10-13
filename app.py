from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def login_page():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    return f"Welcome back, {email}!"

@app.route('/signup')
def signup_page():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup():
    name = request.form.get('name')
    return f"Welcome, {name}! Your account has been created."

if __name__ == '__main__':
    app.run(debug=True)
