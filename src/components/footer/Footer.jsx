import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Dijkstra Algorithm Visualizer</h2>
        </div>

        <div className="footer-social">
          <h3>Follow Me!</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/at1sh3y_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/atishey17/" target="_blank" rel="noopener noreferrer"><FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="decription" >
          Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path
          problem for a graph with non-negative edge weights, producing a shortest-path tree. This
          algorithm is widely used in network routing protocols and mapping applications to find the
          shortest route from a starting node to all other nodes in a weighted graph.
        </p>
        <p>&copy; {new Date().getFullYear()} Dijkstra Algorithm Visualizer. All Rights Reserved by Atishey Jain</p>
      </div>
    </footer>
  );
}
