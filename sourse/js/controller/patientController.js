export default class patientController {
    constructor(model, view) {
        this.model = model,
        this.view = view
    }

    render() {
        return this.view.render(this.model.patients);
    }
}