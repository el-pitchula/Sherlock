from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        story = request.json['story']
        # Chamar sua função de resolução aqui
        solution = solve_story(story)
        return jsonify({'solution': solution})
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
    