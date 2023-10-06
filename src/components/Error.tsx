const Error = () => {
    const error = true;
    const isLoading = false;
    return (
      <>
        {error ? <div className="text-red-500">Error</div> : <div>Not Error</div>}
        {isLoading && <div>Loading...</div>}
      </>
    );
  };

export default Error;
