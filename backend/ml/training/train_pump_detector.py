from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split
import pickle, numpy as np

def train(X: np.ndarray, y: np.ndarray, output_path: str = "ml/models/pump_detector.pkl"):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    clf = GradientBoostingClassifier(n_estimators=100)
    clf.fit(X_train, y_train)
    print(f"Accuracy: {clf.score(X_test, y_test):.2f}")
    with open(output_path, "wb") as f:
        pickle.dump(clf, f)

if __name__ == "__main__":
    print("Provide X and y arrays to train the pump detector.")
