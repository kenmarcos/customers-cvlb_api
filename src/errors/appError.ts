class AppError extends Error {
  public readonly message: string;
  public readonly status: number;

  constructor(message: string, status: number = 400) {
    super(message);
    this.status = status;
  }
}

export default AppError;
