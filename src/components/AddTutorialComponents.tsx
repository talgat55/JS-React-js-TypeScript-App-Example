import {Component, ChangeEvent} from 'react';
import ITutorialData from "../types/ITutorialData";

type Props = {};
type State = ITutorialData & {
    submitted: boolean
}

export default class AddTutorialComponents extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        }
    }

    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            description: e.target.value
        });
    }

    newTutorial() {

    }

    saveTutorial(){

    }

    render() {
        const {submitted, title, description} = this.state;
        return (
            <div className="submit-form">
                {
                    submitted ?
                        (
                            <div>
                                <h4>You submitted successfull</h4>
                                <button
                                    className="btn btn-success"
                                    onClick={this.newTutorial}
                                >
                                    Add
                                </button>
                            </div>
                        )
                        :
                        (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        required
                                        value={title}
                                        onChange={this.onChangeTitle}
                                        name="title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        required
                                        value={description}
                                        onChange={this.onChangeDescription}
                                        name="description"
                                    />
                                </div>
                                <button onClick={this.saveTutorial} className="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        )
                }
            </div>
        );
    }
}
