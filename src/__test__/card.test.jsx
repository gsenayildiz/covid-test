import { render, screen } from "@testing-library/react";
import InfoCard from "../pages/detail/infoCard";

it("Card a gönderilen proplar doğru şekilde ekrana basılır", () => {
    const item = ["last_update", "2023-03-10 04:21:03"]

  render(<InfoCard item={item} />);

  screen.getByText("last update");
});
