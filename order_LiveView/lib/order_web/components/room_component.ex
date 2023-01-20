defmodule OrderWeb.RoomComponent do
  alias Surface.Components.Form.TextInput
  alias Surface.Components.Form.Field
  alias Surface.Components.Form.Label
  alias Surface.Components.Form
  use Surface.LiveComponent

  data(room, :map, default: %{})

  def render(assigns) do
    ~F"""
    <div>
      <h1>Room</h1>
      <Form for={:room} change="change" opts={autocomplete: "off"} submit="submit">
        <Field name="name">
          <Label />
          <div class="control">
            <TextInput value={@room["name"]} />
          </div>
        </Field>


        <Field name="user">
          <Label />
          <div class="control">
            <TextInput value={@room["user"]} />
          </div>
        </Field>

        <input type="submit" value="Submit" />
      </Form>

      <pre>@room = {Jason.encode!(@room, pretty: true)}</pre>
    </div>
    """
  end

  def handle_event("change", %{"room" => room}, socket) do
    {:noreply, update(socket, :room, &Map.merge(&1, room))}
  end

  def handle_event("submit", _, socket) do
    fake_room = Order.Room.fake_fetch()
    {:noreply, update(socket, :room, &Map.merge(&1, fake_room))}
  end
end
