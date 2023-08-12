import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Missions from "../components/Missions";
import { fetchMissions } from "../path/to/missionsSlice"; // Replace with the correct path

const mockStore = configureMockStore([thunk]);

describe("Missions", () => {
  test("Missions are rendered correctly", async () => {
    const store = mockStore({
      mission: {
        missions: [
          {
            id: "Mission_1",
            mission_name: "Mission 1",
            description: "Description for Mission 1",
            reserved: true,
          },
          {
            id: "Mission_2",
            mission_name: "Mission 2",
            description: "Description for Mission 2",
            reserved: false,
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    await store.dispatch(fetchMissions());

    expect(screen.getByText("Mission 1")).toBeInTheDocument();
    expect(screen.getByText("Mission 2")).toBeInTheDocument();
  });

  // Add more tests here if needed
});
