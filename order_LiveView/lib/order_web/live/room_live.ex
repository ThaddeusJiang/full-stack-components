defmodule OrderWeb.RoomLive do
  use Surface.LiveView

  alias OrderWeb.RoomComponent

  def render(assigns) do
    ~F"""
    <RoomComponent id="room" />
    """
  end
end
