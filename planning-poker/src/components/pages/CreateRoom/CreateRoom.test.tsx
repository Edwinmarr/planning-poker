import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CreateRoom } from "./CreateRoom";

//////////////////////////Mock components//////////////////////////
vi.mock("../../molecules/FormCreateRoom/FormCreateRoom", () => ({
  FormCreateRoom: () => <div>FormCreateRoomMock</div>,
}));

describe("<CreateRoom>", () => {
  it("should render page", () => {
    //Given
    //When
    render(<CreateRoom />);
    //Then
    screen.getByText("FormCreateRoomMock");
  });
});
