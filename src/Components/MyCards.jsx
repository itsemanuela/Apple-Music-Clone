const MyCards = ({ song }) => {
  return (
    <div className="card border-0 bg-transparent h-100 sidebar-link">
      <img
        src={song.album.cover_medium}
        alt={song.title}
        className="card-img-top rounded-3 shadow-sm mb-2"
        style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
      />
      <div className="card-body p-0">
        <p
          className="fw-bold mb-0 text-truncate"
          style={{ fontSize: "0.95rem", color: "#333" }}
        >
          {song.title}
        </p>

        <p className="text-muted text-truncate" style={{ fontSize: "0.85rem" }}>
          {song.artist.name}
        </p>
      </div>
    </div>
  );
};

export default MyCards;
